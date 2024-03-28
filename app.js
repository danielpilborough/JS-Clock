
    const monthArray = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    const weekdayArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    const dayNumArray = ["0","1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th","11th","12th","13th","14th","15th","16th","17th","18th","19th","20th","21st","22nd","23rd","24th","25th","26th","27th","28th","29th","30th","31st"]
    const date = new Date();
    let dayNum = dayNumArray[date.getDate()];
    let day = weekdayArray[date.getDay()];
    let month = monthArray[date.getMonth()];
    let year = date.getFullYear();
    let dateOutput = `${day} ${dayNum} ${month} ${year}`;
    console.log(dateOutput);
    document.getElementById("dateToday").innerHTML = dateOutput;


function clockTime(){
   
    const now = new Date();
    const hours = now.getHours().toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const currentTime = `${dateOutput} ${hours}:${minutes}:${seconds}`
    document.getElementById("clock").textContent = currentTime;

}

function chooseBackground(){
    console.time("Background image")
    let number = Math.floor(Math.random()*3)+1;
    console.log(number);

    if(number === 1){
        document.body.style.backgroundImage = "url('https://w.wallhaven.cc/full/zm/wallhaven-zmme6o.jpg')"
        // document.getElementById("clock").style.color = "red";
    }else if(number === 2){
        document.body.style.backgroundImage = "url('https://w.wallhaven.cc/full/4l/wallhaven-4l25wp.jpg')"
    }else if(number === 3){
        document.body.style.backgroundImage = "url('https://w.wallhaven.cc/full/eo/wallhaven-eo11go.jpg')"
    }
    console.timeEnd("Background image");
}




chooseBackground();
clockTime();
setInterval(clockTime, 1000);
setTimeout(function(){
    window.location.reload();
},60000);