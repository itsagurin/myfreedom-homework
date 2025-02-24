const row = document.querySelector(".row");

async function getData() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    renderCards(data)
}

function renderCards(data){
    for(let i = 0; i < data.length; i += 5){
        const name = data[i].name.official;
        const region = data[i].region;
        let population;
        if (data[i].population > 99999) {
            population = (data[i].population / 1000000).toFixed(1);
        } else {
            population = data[i].population;
        }
        const flag = data[i].flags.png;
        const languages = Object.values(data[i].languages).join(", ");
        const currencyKey = Object.keys(data[i].currencies)[0];
        const currency = `${data[i].currencies[currencyKey].symbol} ${data[i].currencies[currencyKey].name}`;
        row.insertAdjacentHTML("beforeend", `
        <div class="col">
            <div class="card h-100">
                <img src="${flag}" class="card-img-top" alt="${name}">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">${region}</p>
                    <p class="card-text">&#128106; ${population}</p>
                    <p class="card-text">&#128483; ${languages}</p>
                    <p class="card-text">&#128176; ${currency}</p>
                </div>
            </div>
        </div>
      `)
    }
}

getData();