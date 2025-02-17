const API_URL = "https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247&units=metric";

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        const cityName = data.city.name;
        const now = new Date();
        const currentDate = now.toLocaleString("ru-RU", {
            timeStyle: "short",
        });

        const currentWeather = data.list[0];
        const currentTemp = Math.round(currentWeather.main.temp);
        const currentDesc = currentWeather.weather[0].description;
        const currentIcon = currentWeather.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${currentIcon}@2x.png`;

        const currentDiv = document.getElementById("current");
        currentDiv.innerHTML = `
            <h2>${cityName}</h2>
            <p>${currentDate}</p>
            <img src="${iconUrl}" alt="${currentDesc}">
            <p>${currentTemp} °C, ${currentDesc}</p>
        `;

        const forecastDiv = document.getElementById("forecast");

        for (let i = 8; i < data.list.length; i += 8) {
            const dayData = data.list[i];
            const dateObj = new Date(dayData.dt_txt);

            const dayLabel = dateObj.toLocaleDateString("ru-RU", {
                weekday: "short",
                day: "numeric",
                month: "short",
            });

            const temp = Math.round(dayData.main.temp);
            const desc = dayData.weather[0].description;
            const icon = dayData.weather[0].icon;
            const dayIconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

            const dayElement = document.createElement("div");
            dayElement.classList.add("forecast-day");
            dayElement.innerHTML = `
              <div>${dayLabel}</div>
              <img src="${dayIconUrl}" alt="${desc}">
              <div>${temp} °C</div>
            `;

            forecastDiv.appendChild(dayElement);
        }
    })
    .catch(error => {
        console.error("Ошибка при получении данных погоды:", error);
    });