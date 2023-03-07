let countryurl = "https://restcountries.com/v2/all"
let country=""
let temp=""
let feels_like=""
let weather=""
let humidity=""
let wind=""
getCountryData()
async function getCountryData() {
    let data = await fetch(countryurl)
    let res = await data.json()
    resname = res.map((ele) => {
      country=ele
      geturldata(country,temp,feels_like,weather,humidity,wind)       
   })}


 let mainDivElement = document.getElementById('mainDiv')
 function geturldata(country){
        var mainDiv = document.createElement('div')
    mainDiv.classList.add("col")
    mainDiv.innerHTML = `  <div class="card display mb-5 ">
    <div class="card-header text-center bg-dark text-white">
    <h5 class="card-title text-center ">${country.name}</h5>
    </div>
    <div class="card-body bd"> 
    <img src=${country.flag} class="card-img-top mb-2 hgt" alt="...">
      <div class="text-center">Capital:${country.capital}</div>
      <div class="text-center">Region:${country.region}</div>
      <div class="text-center">Country code:${country.cioc}</div>
      <div> <button class="text-center btn btn-primary mb-2" id="weatherclick" onclick="getweatherdata('${country.name}')">Click for Weather</button>
   </div>    
  </div>
  </div>`
      mainDivElement.append(mainDiv); 
    }
 
    async function getweatherdata(country){
      let weatherurl = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=e0b7960bbb856b701a80b5e231ed2d0c`
      let data1 = await fetch(weatherurl);
      let res1 = await data1.json(); 
      document.getElementById("subDiv").innerHTML=`<div id="l" style="background-color: antiquewhite;">
      <div class="nme">${country}</div>
      <div>Temperature : ${res1.main.temp}°K</div>    
      <div>Feels-like : ${res1.main.feels_like}°K</div>
      <div>Weather : ${res1.weather[0].main}</div>
      <div>Humidity : ${res1.main.humidity}</div>
      <div>Wind deg : ${res1.wind.deg}°</div>
      </div>`
      
   }
