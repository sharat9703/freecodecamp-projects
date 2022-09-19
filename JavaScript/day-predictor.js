let datePredictor=(date,day,yearOfTheDayToPredict)=>{
let weekdays={
 "Monday":1,
 "Tuesday":2,
 "Wednesday":3,
 "Thursday":4,
 "Friday":5,
 "Saturday":6,
 "Sunday":7
}
let yearPredict = Number(yearOfTheDayToPredict);
let arr=date.split("-");
//let date_day=Number(arr[0]);
//let month=Number(arr[1]);
let year=Number(arr[2]);

let age=()=>{
    if(yearPredict>year){
        return yearPredict-year;
    }else{
        return year-yearPredict;
    }
} ;

let leapYearsInBetween=(year,yearPredict)=>{
    let counter = 0;
    if(yearPredict>year){
    for(let i=year;i<yearPredict;i++){
        if(i%4==0){
            counter++;
        }
    }
}else if(yearPredict<year){
        for(let i=yearPredict;i<year;i++){
            if(i%4==0){
                counter++;
            }
    }
    
}
return counter;
}


let toAdd = (age()) % 7;

let shift = (leapYearsInBetween(year,yearPredict)+toAdd)%7;
let day_value=0;
if(year>yearPredict){
    day_value =weekdays[day]-shift;
}else{
  day_value =weekdays[day]+shift;
}


if(weekdays.hasOwnProperty(day)){
   if(day_value<1){
    day_value= 7-(shift-weekdays[day]);
   }
   if(day_value>7){
    day_value= day_value-7;
   }
}
   let weekArr=(obj,value)=>{
    return Object.keys(obj).find(key=>{ return obj[key]===value});
};

 
return weekArr(weekdays,day_value);
}

console.log(datePredictor("8-2-1997","Saturday","2023"));