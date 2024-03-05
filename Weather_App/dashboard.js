
function dashBoard() {
  const nameHeading = document.getElementById('nameHeading')
  const currentUser = JSON.parse(localStorage.getItem('loggedInUser'))
  nameHeading.innerText = `Hello ${currentUser.name} 👋` // 'Hello ' + currentUser.name 
}

  const inputBox = document.querySelector(".input-box")
  const searchbtn = document.querySelector(".searchbtn")
  const temperature = document.querySelector(".temperature")
  const humidity = document.getElementById("humidity")

 async function checkWeather(city){
    const api_key="9f991b84d1c2818edc146649aa738bdc"
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    let weather_data = await fetch(url)
    weather_data = await weather_data.json()
    // .then(response => response.json())
    console.log(weather_data)

    if(weather_data.cod === '404'){
      alert("location not found")
      return
    }

    temperature.innerHTML = `${Math.floor(weather_data.main.temp - 273.15)}°C`
    humidity.innerHTML = `${weather_data.main.humidity}%`
    // console.log(weather_data)
  }

  searchbtn.addEventListener('click', ()=>{
      checkWeather(inputBox.value)
  })

  // current location weather

  const currentweather = document.getElementById("current-weather")
  const humidity1 = document.getElementById("humidity1")

   navigator.geolocation.getCurrentPosition(async (position) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const apikey = '9f991b84d1c2818edc146649aa738bdc'
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apikey}`

    // fetch(apiurl)
    // .then(response => response.json())
    // .then(data => {
    //   const temp = data.main.temp;
    //   const humidt = data.main.humidity
    //   console.log('the current temperature is ${temp} degree celsius at latitude ${lat} and longitude${long}.')
    //   currentweather.innerHTML = `${Math.floor(temp 273.15)}`
    //   humidity1.innerHTML = `${humidity}%`
    // })

    let current_data = await fetch(apiurl)
    current_data = await current_data.json()

    const temp = current_data.main.temp;
    const humidit = current_data.main.humidity
    currentweather.innerHTML = `${Math.floor(temp - 273.15)}°C`
    humidity1.innerHTML = `${humidit}%`
  })


// const currentweather = document.getElementById('get-location-btn')
// navigator.geolocation.getCurrentPosition((position) => {
//   const lat = position.coords.latitude;
//   const long = position.coords.longitude;
//   const apikey = '9f991b84d1c2818edc146649aa738bdc'
//   const apiurl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`

//   fetch(apiurl)
//   .then(response => response.json())
//   // console.log("location", location)
//   then.(weather_data => {
//     const temp = weather_data.main.temp;
//     const hum = weather_data.main.humidity
//     console.log('The current temperature is ${temp} degrees celsius at latitude ${lat} and longitude ${long}.')
//     currentweather.innerHTML = `${Math.floor(temp -273.15)}`
//     // hum.innerHTML = `${}`
//   })
// })

//   const button = document.getElementById('get-location-btn')

//   async function getData(lat, long){
//         const api_key="9f991b84d1c2818edc146649aa738bdc"

//     const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}}`
// )
//     return await promise.json()
//   }


// async  function gotLocation(position){
//   const result = await getData(position.coords.latitude, position.coords.longitude)
//   console.log(result )
//   }

//   function failedToGet(){
//     console.log('There was some issue')
//   }
//   button.addEventListener('click', async () => {
  // navigator.geolocation.getCurrentPosition(gotLocation, failedToGet)
//   })


  
