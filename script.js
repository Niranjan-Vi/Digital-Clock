




setInterval(() => {
    date=new Date();
    year=date.getFullYear();
    month=date.getMonth();
    day=date.getDate();
    
    let ivattinDina = date.toLocaleDateString('en-US', {
        weekday: 'long', // "Monday"
    });







    hours=date.getHours();
    minutes=date.getMinutes();
    seconds=date.getSeconds();
    hourss=convert(hours);
    document.getElementById('day').innerHTML=  `${ivattinDina}`;
    document.getElementById('time').innerHTML=`${hourss}:${minutes}:${seconds}`;
    document.getElementById('date').innerHTML=`${day}-${month}-${year}`;
    console.log(year,month,day,ivattinDina,hourss,minutes,seconds);
}, 1000);


function convert(hours) {
    newHour=hours%12;
    return newHour;
}