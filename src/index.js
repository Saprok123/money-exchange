// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency >= 10000){
        return { error: 'You are rich, my friend! We don\'t have so much coins for exchange' }
    }
    else if (currency < 0 ) {
        return {};
    }
    if (currency > 0 && currency < 10000){
        let ff ={};
        let Coin50 = Math.floor(currency / 50);
        let Coin25 = Math.floor((currency - (Coin50*50)) / 25);
        let Coin10 = Math.floor((currency - (Coin50*50) - (Coin25*25)) / 10);
        let Coin5 = Math.floor((currency - (Coin50*50) - (Coin25*25) - (Coin10*10)) / 5);
        let Coin1 = Math.floor((currency - (Coin50*50) - (Coin25*25) - (Coin10*10) - (Coin5*5)) / 1);
        let h = Coin50 > 0 ?  {'H' : Coin50}  :{};
        let q = Coin25 > 0 ? {'Q' : Coin25}  :{};
        let d = Coin10 > 0 ? {'D' : Coin10} :{};
        let n = Coin5 > 0 ? {'N' : Coin5} :{};
        let p = Coin1 > 0 ? {'P' : Coin1} :{};
        let message = {...h, ...q, ...d, ...n, ...p};
        return message
    }
}