const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const selectcurrency = document.querySelector(".select-currency")

const convertValues = async () => {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL").then(Response => Response.json())


    const dolartoday = data.USDBRL.high
    const eurotoday = data.EURBRL.high
    const bitcointoday = data.BTCBRL.high
    const libratoday = data.GBPBRL.high
    const realtoday = 1


    console.log(currencyValueToConvert)
    console.log(currencyValueConverted)
    console.log(inputCurrencyValue)


   currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC"
    }).format(inputCurrencyValue)
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValue)
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue)
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue)

    

    if (selectcurrency.value == "Bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        total = inputCurrencyValue * bitcointoday
    }

    if (selectcurrency.value == "Libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        total = inputCurrencyValue * libratoday
    }

    if (selectcurrency.value == "Dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        total = inputCurrencyValue * dolartoday
    }

    if (selectcurrency.value == "Euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        total = inputCurrencyValue * eurotoday
    }

    if (selectcurrency.value == "Brasil") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        total = inputCurrencyValue * realtoday
    }

    if (currencySelect.value == "Bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(total / bitcointoday)
    }


    if (currencySelect.value == "Libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(total / libratoday)
    }

    if (currencySelect.value == "Dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(total / dolartoday)
    }
    if (currencySelect.value == "Euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(total / eurotoday)
    }

    if (currencySelect.value === "Brasil") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(total / realtoday)

     
    }
}
function changeCurrency() {


    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    const imageCurrency = document.querySelector(".currency-imagem")
    const NameCurrency = document.getElementById("name-currency")

    if (currencySelect.value == "Brasil") {
        currencyName.innerHTML = "Brasil"
        currencyImage.src = "./assets/brasil.png"
    }

    if (currencySelect.value == "Bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }


    if (currencySelect.value == "Libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra 1.png"
    }

    if (currencySelect.value == "Dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"
    }
    if (currencySelect.value == "Euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (selectcurrency.value == "Euro") {
        NameCurrency.innerHTML = "Euro"
        imageCurrency.src = "./assets/euro.png"
    }

    if (selectcurrency.value == "Dolar") {
        NameCurrency.innerHTML = "Dolar"
        imageCurrency.src = "./assets/dolar.png"
    }
    if (selectcurrency.value == "Libra") {
        NameCurrency.innerHTML = "Libra"
        imageCurrency.src = "./assets/libra 1.png"
    }

    if (selectcurrency.value == "Bitcoin") {
        NameCurrency.innerHTML = "Bitcoin"
        imageCurrency.src = "./assets/bitcoin.png"

    }

    if (selectcurrency.value == "Brasil") {
        NameCurrency.innerHTML = "Brasil"
        imageCurrency.src = "./assets/brasil.png"
    }


    convertValues()

}




currencySelect.addEventListener("change", changeCurrency)
selectcurrency.addEventListener("change",changeCurrency)
convertButton.addEventListener("click", convertValues)
