const currency_one =document.getElementById('currency-one')
const currency_two =document.getElementById('currency-two')

const amount_one = document.getElementById('amount-one')
const amount_two = document.getElementById('amount-two')

const rateText = document.getElementById('rate')
const btn = document.getElementById('btn')

const calculateMoney = () =>{
    const one = currency_one.value
    const two = currency_two.value
    let url = `https://v6.exchangerate-api.com/v6/6ee25e7acc71b1f9761688e5/latest/${one}`
    fetch(url).
    then(res=>res.json()).
    then(data=>{
        const rate = data['conversion_rates'][two]
        rateText.innerText = ` 1 ${one} = ${rate} ${two}`
    })
}

currency_one.addEventListener('change',calculateMoney)
currency_two.addEventListener('change',calculateMoney)
calculateMoney()