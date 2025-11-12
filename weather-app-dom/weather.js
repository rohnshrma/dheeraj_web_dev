const form = document.getElementsByTagName("form")[0];
const city_input = document.getElementById("city-input");
const info_bx = document.getElementById("info");

var img_bx = document.getElementById("w-icon");
var temp_bx = document.getElementsByClassName("temp")[0];
var f_like_bx = document.getElementsByClassName("f_like")[0];
var desc_bx = document.getElementsByClassName("desc")[0];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchWeather(city_input.value);
});

function sendRequest(city) {
  var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3ed1a8944ae36bde087adc8f67d0f04a&units=metric`;

  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        resolve(JSON.parse(request.responseText));
      }
      if (request.readyState === 4 && request.status !== 200) {
        reject(`Could not fetch weather of ${city}`);
      }
    });

    request.open("GET", url);

    request.send();
  });
}
async function fetchWeather(city) {
  try {
    const data = await sendRequest(city);
    console.log(data);

    const temp = data.main.temp;
    const feels_like = data.main.feels_like;
    const description = data.weather[0].description;
    const icon_url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    console.log(description);

    info_bx.classList.add();

    document.title = `${city}'s Weather`;
    temp_bx.innerText = temp;
    f_like_bx.innerText = feels_like;
    desc_bx.innerText = description;
    img_bx.setAttribute("src", icon_url);

    info_bx.classList.add("show");
  } catch (err) {
    console.log(err);
  }
}
