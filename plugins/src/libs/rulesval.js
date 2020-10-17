const { valdivisions } = require("../constants/valdivisions");
const { leaguesval } = require("../constants/leaguesval");

const GOLD_DIVISION = {
    price: 10
};

const GOLD_LEAGUE_TO_PLATINO = {
    price: 18
};

const PLATINO_DIVISION = {
    price: 12,
};

const PLATINO_LEAGUE_TO_DIAMANT = {
    price: 20,
};

const DIAMANTE_4_DIVISION = {
    price: 15,
};

const DIAMANTE_4_TO_DIAMANT_2 = {
    price: 15,
};

const DIAMANTE_2_DIVISION = {
    price:15,
};

const DIAMANTE_2_TO_MASTER = {
    price: 30,
};

const MASTER = {
    price: 15,
    promo: [{
        name: '+200 lp',
        price: 20
    }]
};

const S1 = {
    price: 10,
};

const LEAGUESVAL = ['iron', 'bronce', 'silver', 'gold', 'platino', 'diamante', 'master'];
const DIVISIONSVAL = [4, 3, 2, 1];

const RULES_FOR_LEAGUE = {
    def: S1,
    gold_to_platino: GOLD_LEAGUE_TO_PLATINO,
    platino_to_diamant: PLATINO_LEAGUE_TO_DIAMANT,
    diamant_4_to_diamant_2: DIAMANTE_4_TO_DIAMANT_2,
    diamant_to_master: DIAMANTE_2_TO_MASTER
};

const RULES_FOR_DIVISION = {
    iron: S1,
    bronce: S1,
    silver: S1,
    gold: GOLD_DIVISION,
    platino: PLATINO_DIVISION,
    diamante_2: DIAMANTE_2_DIVISION,
    diamante_4: DIAMANTE_4_DIVISION,
    master: MASTER,
}

const DIVISION_JUMPS = {
    3: 0,
    2: 1,
    1: 2,
};

const validCombination = ({ currentLeagueval, currentDivisionval, nextLeagueval, nextDivisionval }) => {
    const currentLeaguevalPosition = LEAGUESVAL.indexOf(currentLeagueval.name);
    const nextLeaguevalPosition = LEAGUESVAL.indexOf(nextLeagueval.name);
    
    const currentDivisionvalPosition = DIVISIONSVAL.indexOf(currentDivisionval.name);
    const nextDivisionvalPosition = DIVISIONSVAL.indexOf(nextDivisionval.nameval);

    if(currentLeaguevalPosition < nextLeaguevalPosition ) {
        const leaguesvalToIterate = LEAGUESVAL.slice(0, nextLeaguevalPosition+1);
        let pricePerDivisionval = 0;
        let pricePerLeagueval = 0;
        let prevLeagueval = currentLeagueval.name;
        for(let j = 0; j < leaguesvalToIterate.length; j++) {
            let limit = currentDivision.name;
            if(leaguesvalToIterate[j] !== prevLeagueval ) {
                const unitPriceLeagueval = RULES_FOR_LEAGUE[`${prevLeagueval}_to_${leaguesvalToIterate[j]}`] || RULES_FOR_LEAGUE['def'];
                pricePerLeague += unitPriceLeagueval.price;
                if(prevLeagueval === nextLeagueval.name){
                    limit = nextDivisionval.name
                } else {
                    limit = 1;
                }
                prevLeagueval = leaguesvalToIterate[j];
            }
            let vl = leaguesvalToIterate[j]
            for(let i = 0; i < DIVISION_JUMPS[limit]; i++) {
                if(leaguesvalToIterate[j] === 'diamante') {
                    vl = limit === 2 || limit === 1 ? 'diamante_2' : 'diamante_4';
                }
                pricePerDivisionval += RULES_FOR_DIVISION[vl].price
            }
        }
        return `El precio es: USD ${val + pricePerLeagueval }`;
    } else if (currentLeaguevalPosition === nextLeaguevalPosition && nextDivisionvalPosition > currentDivisionvalPosition ){
        const unitPriceval = nextLeagueval.name === 'diamante' ? `${nextLeagueval.name}_${nextDivisionval.name}` : nextLeagueval.name;
        let price = 0;
        for(let i = currentDivisionvalPosition; i < nextDivisionvalPosition; i++){     price += RULES_FOR_DIVISION[unitPriceval].price;
        }
        return `El precio es: USD ${price}`
    } else {
        return 'No puedes ir rangos hacia abajo';
    }
};

export const getValPricing = (currentLeagueval, currentDivisionval, nextLeagueval, nextDivisionval) => validCombination({ currentLeagueval, currentDivisionval, nextLeagueval, nextDivisionval });