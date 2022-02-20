const daysel=document.getElementById('days');
const hrsel=document.getElementById('hrs');
const minsel=document.getElementById('mins');
const secsel=document.getElementById('secs');

let newYears= document.getElementById("birthday").defaultValue = "1 Jan 2023";

    function cd(){
        const newYearDate=new Date(newYears);
        const curDate=new Date();
    
        const xsecs=(newYearDate-curDate)/1000;
    
        const days=Math.floor((xsecs/3600)/24);
        const hrs=Math.floor((xsecs/3600)%24);
        const mins=Math.floor(xsecs/60)%60;
        const secs=Math.floor(xsecs%60);
    
        daysel.innerHTML = days;
        hrsel.innerHTML = formatTime(hrs);
        minsel.innerHTML = formatTime(mins);
        secsel.innerHTML = formatTime(secs);
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }
    cd();
    setInterval(cd,1000);

    function counting(){
        const temp=document.getElementById("birthday").value;
        if(temp==""||new Date(temp)-new Date()<0)
        alert("Enter In Correct form");
        else
        newYears=temp;
        console.log(newYears);
    }
    
    // Written and Debugged by Kartikey Tiwari | kartikey0402@gmail.com