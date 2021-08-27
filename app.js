const btn = document.getElementById('applyBtn')
const inputFeild = document.getElementById('inputFeild')
const city = document.getElementById('city')
const tamp = document.getElementById('tamp')
const weather = document.getElementById('weather')
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
    console.log(nameWeather.name)
    city.innerText = nameWeather.name
        // for (const city of nameWeather) {
        //     console.log(city.name)
        // }
}