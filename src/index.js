window.onload = () => {
  document.querySelector("#submitbtn").addEventListener("click", () => {
    let cityName = document.querySelector("#location").value;
    if (cityName == "") {
      alert("city name cannot be empty");
      return;
    }
    let APIkey = "328d9347e31008ec5c5155528274de7b";
    let dataObj;
    const data = fetch(
      `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${APIkey}`,
      { mode: "cors" }
    )
      .then((response) => {
        if (!response.ok) {
          return Promise.reject();
        }
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((err) => alert("location doesnt exist"));

    const getData = async () => {
      dataObj = await data;
      console.log(dataObj);
      document.querySelector("#desc").textContent =
        "Description : " + dataObj["weather"][0]["description"];
      document.querySelector("#humidity").textContent =
        "Humidity : " + dataObj["main"]["humidity"];
      document.querySelector("#temp").textContent =
        "Temperature : " + convertTemp(dataObj["main"]["temp"]);
      document.querySelector("#tempMax").textContent =
        "Maximun Temperature : " + convertTemp(dataObj["main"]["temp_max"]);
      document.querySelector("#tempMin").textContent =
        "Minimum Temperature : " + convertTemp(dataObj["main"]["temp_min"]);
    };
    getData();
  });
};

function convertTemp(temp) {
  return (parseFloat(temp) - 273.15).toFixed(2);
}
