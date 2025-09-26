let temp = document.getElementById('temp');
let feels = document.getElementById('feels');
let humidity = document.getElementById('humidity');
let wind = document.getElementById('wind');
let form = document.querySelector('#form');






form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let CLE_API = '9d14fab5293af26cf8dc10b7ff26e891';
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${document.querySelector('#city').value}&appid=${CLE_API}&units=metric`;
    function weather() {
        try {
            fetch(URL)
                .then((response) => {
                    console.log(response);
                    // Il faudra la convertir en format JSON
                    return response.json();
                }).then((data) => {

                    console.log(data);

                    temp.innerHTML= `<p>${data.main.temp}</p>`
                    feels.innerHTML= `<p>${data.main.feels_like}</p>`
                    humidity.innerHTML= `<p>${data.main.humidity}</p>`
                    wind.innerHTML= `<p>${data.wind.speed}</p>`
                            
                })
                // sinon on gestion d'erreur si la requête n'est pas ok
        } catch (error) {
            console.error(error);
            // message d'erreur et/ou redirection vers une autre page
        }
    }
 weather()
})




// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
    
//     let CLE_API = '9d14fab5293af26cf8dc10b7ff26e891';
    
//     const weather2 = async ()=>{
//        try{

//             const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${document.querySelector('#city').value}&appid=${CLE_API}&units=metric`);
//             const data = await res.json()
//             console.log(data);
//             temp.innerHTML= `<p>${data.main.temp}</p>`
//             feels.innerHTML= `<p>${data.main.feels_like}</p>`
//             humidity.innerHTML= `<p>${data.main.humidity}</p>`
//             wind.innerHTML= `<p>${data.wind.speed}</p>`
          

//        }catch(error){

//             console.log(error);
            
//        }
        
//     }

//     weather2()
// })















// correction ledovic  

// const cityForm = document.getElementById("form");
// const Ucity = document.getElementById("city");
// const Temp = document.getElementById("temp");
// const Feel = document.getElementById("feels");
// const Humid = document.getElementById("humidity");
// const Wind = document.getElementById("wind");

// function meteoDisplay(City) {

//     let CLE_API = '9d14fab5293af26cf8dc10b7ff26e891';
//     const API = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${CLE_API}&units=metric`;

//     fetch(API)
//         .then((response) => {
//             console.log(response);
//             return response.json();
//         }).then ((data) => {
//             console.log(data);
//             Temp.innerText = `${data.main.temp} °C`
//             Feel.innerText = `${data.main.feels_like} °C`
//             Humid.innerText = `${data.main.humidity} %`
//             Wind.innerText = `${data.wind.speed} mph`
//         })
// };

// cityForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     meteoDisplay(Ucity.value);
// });


// correction johane prof 

// const APIKEY = "9d14fab5293af26cf8dc10b7ff26e891";

// let city;
// let input = document.querySelector("#city");

// input.addEventListener("input", function (e) {
// 	city = e.target.value;
// 	console.log(city);
// 	console.log(e);
// 	weather();
// });

// const weather = () => {
// 	const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`;

// 	fetch(URL)
// 		.then((response) => response.json())
// 		.then((data) => {
// 			console.log(data);
// 			document.querySelector("#temp").innerHTML = `${data.main.temp} °`;
// 			document.querySelector("#feels").innerHTML = `${data.main.feels_like} °`;
// 			document.querySelector("#humidity").innerHTML = `${data.main.humidity} %`;
// 			document.querySelector("#wind").innerHTML = `${data.wind.speed} km/h`;
// 		})
// 		.catch((err) => {
// 			console.log(`Échec de récupération: ${err}`);
// 		});
// };
