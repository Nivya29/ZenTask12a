var res = fetch("https://restcountries.com/v2/all");

res.then((data)=>data.json()).then((data1)=>{
    const countryContainer =document.getElementById("countryContainer");
    for(var i=0; i<data1.length;i++){
        console.log(data1[i].name);
        
        var card = document.createElement("div");
        card.setAttribute("class","col-lg-4 col-sm-12 d-flex mb-3");
        card.innerHTML=`

          <div class="card " style="width: 18rem";>

             <div class="card-header">
             <h5 class="card-title" >${data1[i].name}</h5>
             </div>
             <img src="${data1[i].flag}" class="card-img-top" alt="...">
             <div class="card-body">
                 <p class="card-text">Capital:${data1[i].capital}</p>
                <p class="card-text">Region:${data1[i].region}</p>
                <p class="card-text">Country Code:${data1[i].alpha3Code}</p>
                <button class="btn btn-primary" onclick="getWeather('${data1[i].capital}')">Click for Weather</button>
             </div>
       </div>

        `;
        countryContainer.appendChild(card);
    }
});
window.getWeather = function(capital){
    const apiKey = "da6dbd384ef8e7dc571ec71bcffef257";
    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}`;
    console.log(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}`);

    fetch(apiUrl)
    .then((data3)=>data3.json()).then((weatherData)=>{
        alert(`Weather in ${capital}: ${weatherData.weather[0].description}`);
    })
    .catch((error) => console.error('Error fetching OpenWeatherMap data:', error));
};
