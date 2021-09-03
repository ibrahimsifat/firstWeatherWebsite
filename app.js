const btn = document.getElementById('applyBtn')
const inputFeild = document.getElementById('inputFeild')
const city = document.getElementById('city')
const tamprature = document.getElementById('tamp')
const weather = document.getElementById('weather')
const minMaxTemp = document.getElementById('minMaxTemp')

const countreisPlaceholder = document.getElementById('countreisPlaceholder')

btn.addEventListener('click', function() {
    const inputValue = inputFeild.value
    inputFeild.value = ''
    console.log(inputValue);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=9cf097760440f4b7d09f28c22bb2345c`
    fetch(url)
        .then(res => res.json())
        .then(data => getweather(data))
})
const getweather = nameWeather => {
    console.log(nameWeather.sys.country)
    console.log(nameWeather.main.temp_min)
    city.innerText = nameWeather.name
    weather.innerText = nameWeather.weather[0].main
        // tamprature
    let temp = Math.round(nameWeather.main.temp - 273.15)
    tamprature.innerText = temp



    //minmaxrtemp innHTML
    minMaxTemp.innerHTML = `
        <div class="min">Max-temperature :
            <span id="max"></span> &deg;C
        </div>
        <div class="min">Min-temperature :
            <span id="min"></span> &deg;C 
        </div>
        <div class="min"> Country Name is :
            <span id="countreis"></span> 
        </div>
        <div class="min"> 
            <img id="flag" src="" >
         </div> 

`
        //selection min max id

    const max = document.getElementById('max')
    const min = document.getElementById('min')
    const countre = document.getElementById('countreis')
    const flag = document.getElementById('flag')

    // max tempareture

    max.innerText = getMax(nameWeather)
        //min
    min.innerText = getMin(nameWeather)
        // get countre name of city
    let url2 = `https://restcountries.eu/rest/v2/alpha/${nameWeather.sys.country}`
    https: //restcountries.eu/rest/v2/name/bd
        fetch(url2)
        .then(respo => respo.json())
        .then(data2 => {
            // let idd = document.getElementById('idid')

            countre.innerText = data2.name
            getFlag(data2)
        })
    const getFlag = data3 => {
            console.log('dskfjh', data3.flag);
            flag.setAttribute('src', '${data.flag}')
        }
        // countreis.innerText = getName(data)




}

const getMin = temp => {
    let result = Math.round(temp.main.temp_min - 273.15)
    return result
}
const getMax = temp => {
    let result = Math.round(temp.main.temp_max - 273.15)
    return result
}