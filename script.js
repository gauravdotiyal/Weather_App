const apiKey="31e26ac4557b57e41bfce046e254c7f0";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon");

async function Checkweather(city ){
    const response =await fetch(apiUrl + city + `&appid=${apiKey}`);
   
    if(response.status==404){
        document.querySelector(".error").style.display="block"; 
        document.querySelector(".weather").style.display="none"; 
    }
    
    else {
        var data=await response.json();
    
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML=Math.round(data.main.humidity)+"%";
        document.querySelector(".wind").innerHTML=Math.round(data.wind.speed) + " km/h";
    
        if(data.weather[0].main=="Clouds"){
            weathericon.src="Images/clouds.png";
        }
        else if(data.weather[0].main=="Clear"){
            weathericon.src = "Images/clear.png";
        }
        else if(data.weather[0].main=="Rain"){
            weathericon.src = "Images/rain.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            weathericon.src = "Images/drizzle.png";
        }
        else if(data.weather[0].main=="Mist"){
            weathericon.src = "Images/mist.png";
        }
    
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none"; 
    }  
}   
searchbtn.addEventListener("click",()=>{ 
    Checkweather(searchbox.value);
})

//added onclick enter => search 
const mytext=document.getElementById("my-text");
const btn=document.getElementById("btn");

mytext.addEventListener("keyup", e=>{
    e.preventDefault();
    if(e.keyCode===13){
        // console.log("Enter is preseed");
        btn.click();
    }
});
// btn.addEventListener("click",()=>{
//     alert("Button is clicked");
// })

 



