(()=>{function e(e){return(parseFloat(e)-273.15).toFixed(2)}window.onload=()=>{document.querySelector("#submitbtn").addEventListener("click",(()=>{let t,n=document.querySelector("#location").value;if(""==n)return void alert("city name cannot be empty");const o=fetch(`http://api.openweathermap.org/data/2.5/weather?q=${n}&APPID=328d9347e31008ec5c5155528274de7b`).then((e=>e.ok?e.json():Promise.reject())).then((e=>e)).catch((e=>alert("location doesnt exist")));(async()=>{t=await o,console.log(t),document.querySelector("#desc").textContent="Description : "+t.weather[0].description,document.querySelector("#humidity").textContent="Humidity : "+t.main.humidity,document.querySelector("#temp").textContent="Temperature : "+e(t.main.temp),document.querySelector("#tempMax").textContent="Maximun Temperature : "+e(t.main.temp_max),document.querySelector("#tempMin").textContent="Minimum Temperature : "+e(t.main.temp_min)})()}))}})();