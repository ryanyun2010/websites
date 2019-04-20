function id(id){
	return document.getElementById(id);
}
var img=id("panda");
img.style.position="absolute";
var y = 750;
var s =0;
var test=0;
var points=0;
var highscore= localStorage.getItem('highscore');
// console.log(highscore);
img.style.top="750px";
function setIntervalX(callback, delay, repetitions) {
	var x = 0;
	var intervalID = window.setInterval(function () {

		callback();

		if (++x === repetitions) {
			window.clearInterval(intervalID);
		}
	}, delay);
}
document.addEventListener("keydown",function(e){
	// console.log("panda");
	var keycode=e.keyCode;
	if(keycode===38 && y===750){
		setIntervalX(function(){
			// console.log(y)
			y -= 60;
			img.style.top = y + 'px'; 
		}, 60,7);
		setTimeout(down,450);
	}
});

document.addEventListener("keydown",function(e){
	// console.log("panda");
	var keycode=e.keyCode;
	if(keycode===32 && y===750){
		setIntervalX(function(){
			// console.log(y)
			y -= 60;
			img.style.top = y + 'px'; 
		}, 60,14);
		setTimeout(highdown,900);
	}
});
function down(){
	setIntervalX(function(){
		// console.log(y)
		y += 60;
		img.style.top = y + 'px'; 
	}, 60,7);
}
function highdown(){
	setIntervalX(function(){
		// console.log(y)
		y += 60;
		img.style.top = y + 'px'; 
	}, 60,14);
}

var colided=0;
var stage=1;
var tmpx= 600;
var done=0;
function newX(){
	var newoff;
	newoff=Math.round(Math.random()*350)+800;
	// console.log(newoff);
	tmpx=tmpx+newoff;
	return tmpx*-1;

}
function newCactus(){
	var tmp;
	tmp = document.createElement('img');
	tmp.setAttribute("src", "https://www.freeiconspng.com/uploads/cactus-transparent-clipart-png-18.png" );
	tmp.setAttribute("width","140px");
	return tmp;

}
var tmpx2=0;
function tigermove(name,x){
	setInterval(function(){
		x+=40;
		name.style.right=x+'px';
		if(x>1840){
			x=newX();
			tmpx2++;
			if(tmpx2===3){
				tmpx=600;
				tmpx2=0;
			}
			if(colided===0){
				points++;
				if(points>highscore){
					highscore = points;
					localStorage.setItem('highscore',highscore);
				}
				id("score").innerHTML="Score: "+points+"<br>HighScore: "+highscore;
			}
		}
		if(x>1650 && test===0 && x < 1800 && y>580 && colided===0){
		//	alert("pandas dead press ok to restart");
			colided=0;
			points=0;
			id("score").innerHTML="Score: "+points+"<br>HighScore: "+highscore;
			x=-400;
			return 0;
		}
	},60);
}
var x1=newX();
var cactus1 = newCactus();
cactus1.style.position="absolute";
cactus1.style.top="750px";
tigermove(cactus1,x1);
cactus1.style.zIndex="1";
cactus1.style.height="150px"
document.querySelector("body").appendChild(cactus1);
var cactus2 = newCactus();
var x2 = newX();
cactus2.style.position="absolute";
cactus2.style.top="750px";
tigermove(cactus2,x2);
cactus2.style.zIndex="2";
cactus2.style.height="150px"
document.querySelector("body").appendChild(cactus2);
var cactus3 = newCactus();
var x3 = newX();
cactus3.style.position="absolute";
cactus3.style.top="750px";
tigermove(cactus3,x3);
cactus3.style.zIndex="3";
cactus3.style.height="150px"
document.querySelector("body").appendChild(cactus3);
tmpx=600;
setInterval(function(){
	if(y===750){	
		if(stage===1){
			img.src = "panda2.svg";
			stage++;
			// console.log(stage);
		}else{
			img.src = "panda1.svg";
			stage--;
			// console.log(stage);
		}

	}
},0.1);
id("score").innerHTML="Score: "+points+"<br>HighScore: "+highscore;
//colision();
