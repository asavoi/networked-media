
let counter = 0;

let startTime = new Date("2024-12-09T00:00:00");
let endTime = new Date(startTime.getTime() + 60 * 1000);
let currentTime = new Date(startTime);

function updateTime() {
   
    if (currentTime.getTime() >= endTime.getTime()) {
        currentTime = new Date(startTime); 
    }

    let hours = String(currentTime.getHours()).padStart(2, '0');
    let minutes = String(currentTime.getMinutes()).padStart(2, '0');
    let seconds = String(currentTime.getSeconds()).padStart(2, '0');
    let formattedTime = `${hours}:${minutes}:${seconds}`;

    let clockElement = document.getElementById("clock");
    if (clockElement) {
        clockElement.textContent = formattedTime;
    }

    currentTime = new Date(currentTime.getTime() + 1000);
}

window.onload = () => {
    
    if (!document.getElementById("date")) {
        let dateElement = document.createElement("p");
        dateElement.id = "date";
        dateElement.textContent = "Dec 09, 2024";
        dateElement.style.color = "white";
        document.body.appendChild(dateElement);
    }

    
    if (!document.getElementById("clock")) {
        let clockElement = document.createElement("span");
        clockElement.id = "clock";
        clockElement.style.color = "rgb(190, 190, 190)";
        clockElement.style.backgroundColor = "black";
        clockElement.style.textShadow = "0 0 8px #ffffff";
        clockElement.style.fontSize = "2.3em";
        clockElement.style.fontFamily = "vcr";
        clockElement.style.position = "absolute";
        clockElement.style.bottom = "180px";
        clockElement.style.right = "150px";
        clockElement.style.opacity = "1"; 
        document.body.appendChild(clockElement);
    }

    updateTime(); 
    setInterval(updateTime, 1000); 
};


window.onload = () => {
    let span = document.createElement("span");
    span.id = "clock"; 
    span.style.color = "rgb(190, 190, 190)";
    span.style.backgroundColor = "black";
    span.style.textShadow = "0 0 8px #ffffff";
    span.style.fontSize = "2.3em";
    span.style.fontFamily = "vcr";
    span.style.position = "absolute";
    span.style.bottom = "180px";
    span.style.right = "150px";
    span.style.opacity = "0";
    document.body.appendChild(span);


    updateTime(); 
    setInterval(updateTime, 1000); 
    };


function lines() {
    const words1 = document.getElementById("words1");
    const words2 = document.getElementById("words2");
    const words3 = document.getElementById("words3");
    const words4 = document.getElementById("words4");
    const words5 = document.getElementById("words5");
    const words6 = document.getElementById("words6");
    const words7 = document.getElementById("words7");
    const words8 = document.getElementById("words8");
    const words9 = document.getElementById("words9");
    const words10 = document.getElementById("words10");
    const words11 = document.getElementById("words11");
    const words12 = document.getElementById("words12");
    const words13 = document.getElementById("words13");
    const words14 = document.getElementById("words14");
    const words15 = document.getElementById("words15");
    const words16 = document.getElementById("words16");
    const words17 = document.getElementById("words17");
    const words18 = document.getElementById("words18");
    const words19 = document.getElementById("words19");
    const words20 = document.getElementById("words20");
    const words21 = document.getElementById("words21");
    const words22 = document.getElementById("words22");
    const words23 = document.getElementById("words23");
    const words24 = document.getElementById("words24");
    const words25 = document.getElementById("words25");
    const words26 = document.getElementById("words26");
    const words27 = document.getElementById("words27");
    const words28 = document.getElementById("words28");
    const words29 = document.getElementById("words29");

    const timestamp = document.getElementById("timestamp");
    const clock = document.getElementById("clock");
    const playbutton = document.getElementById("playbutton");

    counter++;
    if(counter == 1){
        playbutton.play();
        timestamp.style.visibility = "visible";
        timestamp.style.opacity = "1";
        clock.style.visibility = "visible";
        clock.style.transition = "opacity 2s linear";
        clock.style.opacity = "1";
        words1.style.opacity = "1";
    }

    if(counter == 2){
        words1.style.opacity = 0;
        words2.style.opacity = 1;
    }

    if(counter == 3){
        words3.style.opacity = 1;
        words2.style.opacity = 0;
    }

    if(counter == 4){
        words4.style.opacity = 1;
        words3.style.opacity = 0;
    }

    if(counter == 5){
        words5.style.opacity = 1;
        words4.style.opacity = 0;
    }

    if(counter == 6){
        words6.style.opacity = 1;
        words5.style.opacity = 0;
    }

    if(counter == 7){
        words7.style.opacity = 1;
        words6.style.opacity = 0;
    }

    if(counter == 8){
        words8.style.opacity = 1;
        words7.style.opacity = 0;
    }

    if(counter == 9){
        words9.style.opacity = 1;
        words8.style.opacity = 0;
    }

    if(counter == 10){
        words10.style.opacity = 1;
        words9.style.opacity = 0;
    }

    if(counter == 11){
        words11.style.opacity = 1;
        words10.style.opacity = 0;
    }

    if(counter == 12){
        words12.style.opacity = 1;
        words11.style.opacity = 0;
    }

    if(counter == 13){
        words13.style.opacity = 1;
        words12.style.opacity = 0;
    }

    if(counter == 14){
        words14.style.opacity = 1;
        words13.style.opacity = 0;
    }

    if(counter == 15){
        words15.style.opacity = 1;
        words14.style.opacity = 0;
    }

    if(counter == 16){
        words16.style.opacity = 1;
        words15.style.opacity = 0;
    }

    if(counter == 17){
        words17.style.opacity = 1;
        words16.style.opacity = 0;
    }

    if(counter == 18){
        words18.style.opacity = 1;
        words17.style.opacity = 0;
    }

    if(counter == 19){
        words19.style.opacity = 1;
        words18.style.opacity = 0;
    }

    if(counter == 20){
        words20.style.opacity = 1;
        words19.style.opacity = 0;
    }

    if(counter == 21){
        words21.style.opacity = 1;
        words20.style.opacity = 0;
    }

    if(counter == 22){
        words22.style.opacity = 1;
        words21.style.opacity = 0;
    }

    if(counter == 23){
        words23.style.opacity = 1;
        words22.style.opacity = 0;
    }

    if(counter == 24){
        words24.style.opacity = 1;
        words23.style.opacity = 0;
    }

    if(counter == 25){
        words25.style.opacity = 1;
        words24.style.opacity = 0;
    }

    if(counter == 26){
        words26.style.opacity = 1;
        words25.style.opacity = 0;
    }

    if(counter == 27){
        words27.style.opacity = 1;
        words26.style.opacity = 0;
    }

    if(counter == 28){
        words28.style.opacity = 1;
        words27.style.opacity = 0;
    }

    if(counter == 29){
        words29.style.opacity = 1;
        words28.style.opacity = 0;
    }


};




