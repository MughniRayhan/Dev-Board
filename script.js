const theme = document.getElementById("theme");
const date = document.getElementById("date");
const weekday = document.getElementById("weekday");
const time=document.getElementById("time");
const completeTask = document.getElementById("complete");
const assignedTask = document.getElementById("asigned");
const btn = document.getElementById("btn");

// theme color

let color=['#F4F7FF','#F4F8D3','#FBF3B9','#B7B1F2','#B9B28A','#91AC8F']
 let count=0;
theme.addEventListener("click", function(event){
    event.preventDefault();
    count++;
    if(count<color.length){ 
        document.body.style.backgroundColor= color[count];
    } 
    else{
        count=0;
        document.body.style.backgroundColor= color[count];
}
})

// date
const currentDate = new Date();
const times = {
     month: 'short',
     day: '2-digit',
     year: 'numeric' 
    };

const formattedDate = currentDate.toLocaleDateString('en-US', times).replace(',', '');
weekday.innerHTML=currentDate.toLocaleDateString('en-US', { weekday: 'short' });
time.innerHTML=formattedDate;

// complete
const taskNumber = parseInt(completeTask.innerHTML);
const availableTask = parseInt(assignedTask.innerHTML);
btn.addEventListener("click", function(event){
  event.preventDefault();
  completeTask.innerHTML=taskNumber+1;
  if(availableTask>10){
  assignedTask.innerHTML=availableTask-1;
  }else{
    assignedTask.innerHTML="0" +  availableTask-1;
  }
})