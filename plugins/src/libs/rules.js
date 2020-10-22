const { divisions } = require("../constants/divisions");
const { leagues } = require("../constants/leagues");

const GOLD_DIVISION = {
    price: 12
};

const GOLD_LEAGUE_TO_PLATINO = {
    price: 20
};

const PLATINO_DIVISION = {
    price: 15,
};

const PLATINO_LEAGUE_TO_DIAMANT = {
    price: 20,
};

const DIAMANTE_4_DIVISION = {
    price: 25,
};

const DIAMANTE_4_TO_DIAMANT_2 = {
    price: 45,
};

const DIAMANTE_2_DIVISION = {
    price:35,
};

const DIAMANTE_2_TO_MASTER = {
    price: 55,
};

const MASTER = {
    price: 15,
    promo: [{
        name: '+200 lp',
        price: 20
    }]
};

const S1 = {
    price: 5,
};

const LEAGUES = ['iron', 'bronce', 'silver', 'gold', 'platino', 'diamante', 'master'];
const DIVISIONS = [4, 3, 2, 1];

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
    4: 3,
    3: 2,
    2: 1,
    1: 0
};

const validCombination = ({ currentLeague, currentDivision, nextLeague, nextDivision }) => {
    const currentLeaguePosition = LEAGUES.indexOf(currentLeague.name);
    const nextLeaguePosition = LEAGUES.indexOf(nextLeague.name);
    
    const currentDivisionPosition = DIVISIONS.indexOf(currentDivision.name);
    const nextDivisionPosition = DIVISIONS.indexOf(nextDivision.name);

    if(currentLeaguePosition < nextLeaguePosition ) {
        const leaguesToIterate = LEAGUES.slice(0, nextLeaguePosition+1);
        console.log(leaguesToIterate)
        let pricePerDivision = 0;
        let pricePerLeague = 0;
        let prevLeague = currentLeague.name;
        for(let j = 0; j < leaguesToIterate.length; j++) {
            let limit = currentDivision.name;
            if(leaguesToIterate[j] !== prevLeague ) {
                prevLeague = leaguesToIterate[j];
                const unitPriceLeague = RULES_FOR_LEAGUE[`${prevLeague}_to_${leaguesToIterate[j]}`] || RULES_FOR_LEAGUE['def'];
                pricePerLeague += unitPriceLeague.price;
                if(prevLeague === nextLeague.name){
                    console.log(nextDivision.name)
                    if (nextDivision.name===4){
                        limit= 0;
                    }
                    else if (nextDivision.name ===3){
                        limit= 1;
                    }
                    else if (nextDivision.name ===2){
                        limit = 2;
                    }
                    else {
                        limit = 3;
                    }
                } 
            }
            let vl = leaguesToIterate[j]
            for(let i = 0; i < DIVISION_JUMPS[limit]; i++) {
                if(leaguesToIterate[j] === 'diamante') {
                    vl = limit === 2 || limit === 1 ? 'diamante_2' : 'diamante_4';
                }
                pricePerDivision += RULES_FOR_DIVISION[vl].price
            }
        }
        console.log(pricePerDivision)
        return `El precio es: USD ${pricePerLeague + pricePerDivision}`;
    } else if (currentLeaguePosition === nextLeaguePosition && nextDivisionPosition > currentDivisionPosition ){
        const unitPrice = nextLeague.name === 'diamante' ? `${nextLeague.name}_${nextDivision.name}` : nextLeague.name;
        let price = 0;
        for(let i = currentDivisionPosition; i < nextDivisionPosition; i++){
            price += RULES_FOR_DIVISION[unitPrice].price;
        }
        return `El precio es: USD ${price}`
    } else {
        return 'No se puede hacer un downgrade hacia abajo';
    } 
};

export const getLoLPricing = (currentLeague, currentDivision, nextLeague, nextDivision) => validCombination({ currentLeague, currentDivision, nextLeague, nextDivision });