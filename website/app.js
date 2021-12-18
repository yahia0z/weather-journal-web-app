/* Global Variables */
const base = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const key = '&appid=91a09774cc3ec36e1a4b6d5e3cc688f2';
let unit = '&units=metric'; /*temperature display unit is set to Celsius by default*/
let u = ' °C';

//action on click
document.getElementById('generate').addEventListener('click', action);
function action(){
    // Create a new date instance dynamically with JS
    let d = new Date();
    let newDate = (d.getMonth()+1)+'.'+ d.getDate()+'.'+ d.getFullYear();
    let cTime = d.getHours()+':'+d.getMinutes();
    //selecting display units
    let select = document.getElementById('Units');
    let val = select.options[select.selectedIndex].value;
    if (val==='C'){
        unit = '&units=metric';
        u = ' °C';
    }
    else if (val==='F'){
        unit = '&units=imperial';
        u = ' °F';
    }
    else if (val==='K'){
        unit = '';
        u = ' K';
    }

    getData(base,zip,unit,key)
    .then(function(wdata){ /*capturing the entered feelings and sending the data to the POST request*/
        const feel = document.getElementById('feelings').value;
        postData('/post', {temp: wdata.main.temp, date: newDate, response: feel, city: wdata.name, time: cTime});
    })
    .then(display)
    .then(scroll);
    
}

//Getting weather data from API
const getData = async (base, zip, unit, key)=>{
    zip = document.getElementById('zip').value;
    const res = await fetch(base+zip+unit+key);
    try {
        const data = await res.json();
        //popup alert when the zipcode is invalid or empty
        if ((data.cod==='404') || (zip==='')){
            window.alert('Invalid Zipcode');
        }
        return data;
    }  
    catch(error) {
        console.log("ERROR: "+ error);
    }
  };


//POST request to save the data
const postData = async (url = '', data = {})=>{
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const received = await res.json();
        return received;
    }
    catch(error) {
        console.log('ERROR: '+ error);
    }
};

//Updating the UI
const display = async ()=>{
    const uiUpdate = await fetch('/display');
    try{
        const ready = await uiUpdate.json();
        document.getElementById('date').innerHTML = 'Date: ' + ready.date;
        document.getElementById('temp').innerHTML = 'Temperature: ' + ready.temperature + u;
        document.getElementById('content').innerHTML = 'Feeling: ' + ready.response;
        document.getElementById('city').innerHTML = 'City: '+ ready.city;
        document.getElementById('time').innerHTML = 'Time: ' + ready.time;
    }
    catch(error) {
        console.log('ERROR: '+ error);
    }
};

//scrolling to the generated data
function scroll(){
    document.getElementById('entryHolder').scrollIntoView({behavior: "smooth"});
}