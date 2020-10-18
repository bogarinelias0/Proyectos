const { duodivisions } = require("../constants/duodivisions");
const { duoleagues } = require("../constants/duoleagues");

const GOLD_DIVISION = {
    price: 18
};

const GOLD_LEAGUE_TO_PLATINO = {
    price: 45
};

const PLATINO_DIVISION = {
    price: 26,
};

const PLATINO_LEAGUE_TO_DIAMANT = {
    price: 53,
};

const DIAMANTE_4_DIVISION = {
    price: 45,
};

const DIAMANTE_4_TO_DIAMANT_2 = {
    price: 68,
};

const DIAMANTE_2_DIVISION = {
    price: 83,
};

const DIAMANTE_2_TO_MASTER = {
    price: 83,
};

const MASTER = {
    price: 23,
    promo: [{
        name: '+200 lp',
        price: 30
    }]
};

const S1 = {
    price: 15,
};

const LEAGUESDUO = ['iron', 'bronce', 'silver', 'gold', 'platino', 'diamante', 'master'];
const DIVISIONSDUO = [4, 3, 2, 1];

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
    4: 0,
    3: 1,
    2: 2,
    1: 3
};

const validCombination = ({ currentLeagueduo, currentDivisionduo, nextLeagueduo, nextDivisionduo }) => {
    const currentLeaguePositionduo = LEAGUESDUO.indexOf(currentLeagueduo.name);
    const nextLeaguePositionduo = LEAGUESDUO.indexOf(nextLeagueduo.name);
    
    const currentDivisionPositionduo = DIVISIONSDUO.indexOf(currentDivisionduo.name);
    const nextDivisionPositionduo = DIVISIONSDUO.indexOf(nextDivisionduo.name);

    if(currentLeaguePositionduo < nextLeaguePositionduo ) {
        const leaguesToIterate = LEAGUESDUO.slice(0, nextLeaguePositionduo+1);
        let pricePerDivisionduo = 0;
        let pricePerLeagueduo = 0;
        let prevLeagueduo = currentLeagueduo.name;
        for(let j = 0; j < leaguesToIterate.length; j++) {
            let limit = currentDivisionduo.name;
            if(leaguesToIterate[j] !== prevLeagueduo ) {
                const unitPriceLeagueduo = RULES_FOR_LEAGUE[`${prevLeagueduo}_to_${leaguesToIterate[j]}`] || RULES_FOR_LEAGUE['def'];
                pricePerLeagueduo += unitPriceLeagueduo.price;
                if(prevLeagueduo === nextLeagueduo.name){
                    limit = nextDivisionduo.name
                } else {
                    limit = 1;
                }
                prevLeagueduo = leaguesToIterate[j];
            }
            let vl = leaguesToIterate[j]
            for(let i = 0; i < DIVISION_JUMPS[limit]; i++) {
                if(leaguesToIterate[j] === 'diamante') {
                    vl = limit === 2 || limit === 1 ? 'diamante_2' : 'diamante_4';
                }
                pricePerDivisionduo += RULES_FOR_DIVISION[vl].price
            }
        }
        return `El precio es: USD ${pricePerDivisionduo + pricePerLeagueduo }`;
    } else if (currentLeaguePositionduo === nextLeaguePositionduo && nextDivisionPositionduo > currentDivisionPositionduo ){
        const unitPriceduo = nextLeagueduo.name === 'diamante' ? `${nextLeagueduo.name}_${nextDivisionduo.name}` : nextLeagueduo.name;
        let price = 0;
        for(let i = currentDivisionPositionduo; i < nextDivisionPositionduo; i++){
            price += RULES_FOR_DIVISION[unitPriceduo].price;
        }
        return `El precio es: USD ${price}`
    } else {
        return 'No se puede hacer un downgrade hacia abajo';
    }
};

export const getDuoPricing = (currentLeagueduo, currentDivisionduo, nextLeagueduo, nextDivisionduo) => validCombination({ currentLeagueduo, currentDivisionduo, nextLeagueduo, nextDivisionduo });