const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
function convertValues(){
    
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")
    
    const dolartoday = 4.97
    const eurotoday = 5.40
    const libratoday = 6.29
    const ienetoday = 30.50
    const bitcointoday = 338454

    if(currencySelect.value == "Bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE" ,{
            style:"currency" ,
            currency: "BTC"
        }).format(inputCurrencyValue / bitcointoday)
    }

    if(currencySelect.value == "Iene"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP" ,{
            style:"currency" ,
            currency: "JPY"
        }).format(inputCurrencyValue / ienetoday)
    }


    if(currencySelect.value == "Libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB" ,{
            style:"currency" ,
            currency: "GBP"
        }).format(inputCurrencyValue / libratoday)
    }
    
    if(currencySelect.value == "Dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US" ,{
            style:"currency" ,
            currency: "USD"
        }).format(inputCurrencyValue / dolartoday)
    }
    if(currencySelect.value == "Euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE" ,{
            style:"currency" ,
            currency: "EUR"
        }).format(inputCurrencyValue / eurotoday)

    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
        style:"currency" ,
        currency: "BRL"
    }).format(inputCurrencyValue)

}

  function changeCurrency (){

    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if(currencySelect.value == "Bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    if(currencySelect.value == "Iene"){
        currencyName.innerHTML = "Iene"
        currencyImage.src = "./assets/iene.png"
    }

    if(currencySelect.value == "Libra"){
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra 1.png"
    }

    if(currencySelect.value == "Dolar"){
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"
    }
    if(currencySelect.value == "Euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    convertValues()

  }
  
    


currencySelect.addEventListener("change" ,changeCurrency)

convertButton.addEventListener("click" , convertValues)