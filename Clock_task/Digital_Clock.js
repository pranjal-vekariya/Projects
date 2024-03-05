

function Clock(){
	let Time = new Date();
	let CurTime = Time.toLocaleTimeString();
	let ClkId = document.getElementById("ClkId").innerHTML = CurTime;
}

let ChangeTime = setInterval(Clock)