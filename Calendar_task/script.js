const dt = new Date();
// console.log(dt.getMonth())

function RenderDate(){
	dt.setDate(1);
let day = dt.getDay();
// console.log(dt.getDay())
// dt.setMonth(11)
let endDate = new Date(dt.getFullYear(),dt.getMonth() + 1,0).getDate();
// console.log(endDate)

let prevDate = new Date(dt.getFullYear(),dt.getMonth(),0).getDate();

let today = new Date()


// console.log(today);
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
	];
// console.log(months[dt.getMonth()])
document.getElementById("date_str").innerHTML = new Date().toDateString();
document.getElementById("month").innerHTML = months[dt.getMonth()];

//for ex: 
// var x = 10;
// x+= 5;
// x = x+ 5;

let cells = "";

for(x = day; x>0; x--){
	cells+= "<div class = 'prev_date'>" + (prevDate - x + 1) + "</div>"
}

for(i=1; i<=endDate; i++){
	if(i == today.getDate() && dt.getMonth() == today.getMonth()){
	cells+= "<div class='today'>" + i + "</div>"
	}else{
		cells+= "<div>" + i + "</div>"
	}
}


document.getElementsByClassName("days")[0].innerHTML = cells;
}
function movedate(para){
	if(para == 'prev'){
		dt.setMonth(dt.getMonth() - 1);
	}else if(para == 'next'){
		dt.setMonth(dt.getMonth() + 1);
	}
	RenderDate();
	console.log(para)

}
	


