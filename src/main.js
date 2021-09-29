const search = document.getElementById('search')
const pId = document.getElementById('idresult')
const btn = document.getElementById('getinfo')
const searchBtn = document.getElementById('searchBtn')
const clearBtn = document.querySelector('.search__clear')

let temp;

function toCelcius(temp) {
    temp -= celcius;
}

search.addEventListener('keydown', (key)=> {
    if(key.keyCode === 13) {
        cityData(search.value)
        search.value = ''
    }
})
searchBtn.addEventListener('click', () => cityData(search.value)
)

btn.addEventListener('click', () => {
    if(pId.innerText !== '') {
        getData(pId.innerText)
        pId.innerText = ''
    } else {
        console.log('Search city')
    }
})

clearBtn.addEventListener('click', () => {
    app.innerText = '';
})
getData(3531673)