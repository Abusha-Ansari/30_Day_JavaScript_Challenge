let inputCity;
let submit = document.getElementById("btn")
let result_head = document.getElementById("result-head");
let date_head = document.getElementById("date-head");
let status_head = document.getElementById("status-head");
let temp_head = document.getElementById("temp-head");


submit.addEventListener("click" , (e)=>{
    e.preventDefault();
    inputCity = document.getElementById("searchField").value;
    
    getData(inputCity);
})

async function getData(inputCity) {
    const API_key = "587772a4e085ff05e9ed083f2f5ce386";
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${inputCity},india&appid=${API_key}`;
          
    try {
        const response = await fetch(url);
        if (!response.ok) {
            // Log the response for more details
            const errorData = await response.text();
            throw new Error(`Error ${response.status}: ${response.statusText}. Response: ${errorData}`);
        }
    
        const json = await response.json();

        result_head.innerText = `${inputCity}`;

        console.log(json.list[0].weather[0].description);

        date_head.innerText = json.list[0].dt_txt;

        status_head.innerText = json.list[0].weather[0].description;

        temp_head.innerText = (json.list[0].main.temp - 273.15).toFixed(2);


        const fiveDayForecast = filterFiveDayForecast(json);
        perdayupdate(fiveDayForecast);
        // console.log(fiveDayForecast);
        
    } catch (error) {
        console.error(`Failed to fetch data: ${error.message}`);
    }
}

function filterFiveDayForecast(data) {
    const dailyForecast = {};

    // Iterate over the forecast list
    data.list.forEach(item => {
        // Extract the date from the timestamp
        const date = new Date(item.dt * 1000);
        const dateString = date.toISOString().split('T')[0]; // Format as YYYY-MM-DD

        // Initialize entry if not already present
        if (!dailyForecast[dateString]) {
            dailyForecast[dateString] = {
                date: dateString,
                temperature: [],
                weather: []
            };
        }

        // Collect temperature and weather data
        dailyForecast[dateString].temperature.push(item.main.temp);
        dailyForecast[dateString].weather.push(item.weather[0].description);
    });

    // Convert the dictionary to an array and sort by date
    const sortedForecast = Object.values(dailyForecast).sort((a, b) => new Date(a.date) - new Date(b.date));

    // Return the first 5 days of forecast
    return sortedForecast.slice(0, 5).map(day => ({
        date: day.date,
        temperature: {
            min: Math.min(...day.temperature),
            max: Math.max(...day.temperature)
        },
        weather: [...new Set(day.weather)] 
    }));
}

function perdayupdate(params){

    let objUrls = {
        Rain:'https://w7.pngwing.com/pngs/49/967/png-transparent-rain-rain-blue-cloud-drop-thumbnail.png',
        sunny:'https://png.pngtree.com/png-vector/20220908/ourmid/pngtree-cute-sunny-png-image_6143560.png',

    }

    let date1 = document.getElementById("date1")
    let temp1 = document.getElementById("temp1")
    let weather1 = document.getElementById("weather1")

    let date2 = document.getElementById("date2")
    let temp2 = document.getElementById("temp2")
    let weather2 = document.getElementById("weather2")

    let date3 = document.getElementById("date3")
    let temp3 = document.getElementById("temp3")
    let weather3 = document.getElementById("weather3")

    let date4 = document.getElementById("date4")
    let temp4 = document.getElementById("temp4")
    let weather4 = document.getElementById("weather4")

    let date5 = document.getElementById("date5")
    let temp5 = document.getElementById("temp5")
    let weather5 = document.getElementById("weather5")

    date1.innerText = params[0].date;
    date2.innerText = params[1].date;
    date3.innerText = params[2].date;
    date4.innerText = params[3].date;
    date5.innerText = params[4].date;

    weather1.innerText = params[0].weather;
    weather2.innerText = params[1].weather;
    weather3.innerText = params[2].weather;
    weather4.innerText = params[3].weather;
    weather5.innerText = params[4].weather;

    temp1.innerText = (params[0].temperature.min - 273.15).toFixed(2);
    temp2.innerText = (params[1].temperature.min - 273.15).toFixed(2);
    temp3.innerText = (params[2].temperature.min - 273.15).toFixed(2);
    temp4.innerText = (params[3].temperature.min - 273.15).toFixed(2);
    temp5.innerText = (params[4].temperature.min - 273.15).toFixed(2);


    console.log(params);
    

    
    
    }











