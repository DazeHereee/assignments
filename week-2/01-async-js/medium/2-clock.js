// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


function clockdisplay(){
    let clock = new Date();
    let hours = clock.getHours();
    let minutes = clock.getMinutes();
    let seconds = clock.getSeconds();
    setInterval((count)=>{
        if(seconds == 59){
            seconds = 0;
            minutes += 1;
        }
        if(minutes == 59){
            minutes = 0;
            hours += 1;
        }
        seconds += 1;
        console.log(`${hours} : ${minutes} : ${seconds}`);
    },1000)
}

clockdisplay();
