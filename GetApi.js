const fetch = require('node-fetch');
const fs = require('fs')
/*
fetch('https://restcountries.com/v2/all')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.error(error);
})*/

/*
async function getCountries(){
    try{
        const response= await fetch('https://restcountries.com/v2/all');
        const data =  await response.json();
        let countriesList = "";

        data.forEach(country => {
            countriesList+=`${country["name"]}\n`;
        });

        fs.writeFile('countries.txt', countriesList, (error) => {
            if(error){
                console.log(error);
                return;
            }
            console.log("Se ha creado el archivo countries.txt");
        })

    }catch(error){
        console.log(error);
    }
}

getCountries();*/

async function getBitcoin(){
    try{
        const response= await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        const data =  await response.data.bpi.json();
        let BitcoinList = "";

        data.USD.code(Bitcoin => {
            BitcoinList+=`${Bitcoin["USD"]}`;
        });

        fs.writeFile('Bitcoin.txt', BitcoinList, (error) => {
            if(error){
                console.log(error);
                return;
            }
            console.log("Se ha creado el archivo Bitcoin.txt");
        })

    }catch(error){
        console.log(error);
    }
}

getBitcoin();