let winnert = 0;
let id = function (id) {
  return document.getElementById(id);
}
let tag = function (tag) {
  return document.getElementsByTagName(tag);
}
let doc = document;
let eventListner = function (ele, listner, func) {
  ele.addEventListener(listner, func);
}
let innerHtml = function (ele, value) {
  ele.innerHTML = value;
}
let classname = function (classnamea) {
  return document.getElementsByClassName(classnamea)
}
let cssSelectAll=function(select){
  return document.querySelectorAll(select);
}
let cssSelectOne=function(select){
  document.querySelector(select);
}

let makeimgslider4=function(){
  var slides=classname("slide");
  for(let i =0;i<slides.length;i++){
    slides[i].style.width="1000";
    slides[i].style.float="left";
  }
  var num=0;
  var button=document.getElementById("one");
  button.addEventListener("click",function(){
    slides[0].style.display="block";
  })
  var button2=document.getElementById("two");
  button2.addEventListener("click",function(){
    slides[0].style.display="none";
    slides[1].style.display="block";
    slides[2].style.display="none";
    slides[3].style.display="none";
  })
  var button3=document.getElementById("three");
  button3.addEventListener("click",function(){
    slides[0].style.display="none";
    slides[1].style.display="none";
    slides[2].style.display="block";
    slides[3].style.display="none";
  })
  var button4=document.getElementById("four");
  button4.addEventListener("click",function(){
    slides[0].style.display="none";
    slides[1].style.display="none";
    slides[2].style.display="none";
    slides[3].style.display="block";
  })
}
let chktie = function(board){
	let tmp=0
	for(let i=0;i<board.length;i++){
		for(let j=0;j<board[i].length;j++){
			if(board[i][j] > 0){
				tmp++;
				console.log(tmp);
				if(tmp===49){
					return 1;
				}
			}
		}
	}
}
let how_to_play=id("howtoplay");
id("howtob").addEventListener("click",function(){
 how_to_play.style.display="block";
})
var c=id("game");
var draw=c.getContext("2d");
draw.moveTo(60,200)
for(let i =1;i<9;i++){
    draw.lineTo(i*60,550);
    draw.moveTo(i*60+60,200);
}
draw.moveTo(60,200);
for(let i=200;i<600;i+=50){
  draw.lineTo(480,i);
  draw.moveTo(60,i+50);
}
draw.stroke();
let board;
let boardu;
function newBoard(){
  board=[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];
}
function chkLine(a,b,c,d) {
    // Check first cell non-zero and all cells match
  //console.log(a+":"+b+":"+c+":"+d)
    return ((a != 0) && (a ==b) && (a == c) && (a == d));
}
function chkWinner(bd_wrong) {
    // Check down
  console.log(bd_wrong);
  let bd=[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];
  for (r=0; r<7; r++) {
    for(c=0; c<7; c++) {
      bd[r][c] = bd_wrong[6-r][c];
    }
  }
  console.log(bd);
    for (r = 0; r < 4; r++){
        for (c = 0; c < 7; c++){
            if (chkLine(bd[r][c], bd[r+1][c], bd[r+2][c], bd[r+3][c])){
                console.log(r+" "+c);
								draw.fillStyle="#ffff00"
							console.log(r+" "+c+":"+(r+1)+" "+c+":"+(r+2)+" "+c+":"+(r+3)+" "+c)
								draw.fillRect(c*60+60,200+(r*50),60,50)
								draw.fillRect(c*60+60,200+((r+1)*50),60,50)
								draw.fillRect(c*60+60,200+((r+2)*50),60,50)
								draw.fillRect(c*60+60,200+((r+3)*50),60,50)
                return bd[r][c];
            }
        }
    }
    // Check right
    for (r = 0; r < 7; r++){
        for (c = 0; c < 4; c++){
            if (chkLine(bd[r][c], bd[r][c+1], bd[r][c+2], bd[r][c+3])){
							draw.fillStyle="#ffff00"
								draw.fillRect(c*60+60,200+r*50,60,50)
								draw.fillRect((c+1)*60+60,200+r*50,60,50)
								draw.fillRect((c+2)*60+60,200+r*50,60,50)
								draw.fillRect((c+3)*60+60,200+r*50,60,50)
							draw.stroke()
                return bd[r][c];

            }
        }
    }
    // Check down-right
    for (r = 0; r < 4; r++){
        for (c = 0; c < 4; c++){
            if (chkLine(bd[r][c], bd[r+1][c+1], bd[r+2][c+2], bd[r+3][c+3])){
							draw.fillStyle="#ffff00"
							draw.fillRect(c*60+60,200+r*50,60,50)
							draw.fillRect((c+1)*60+60,200+(r+1)*50,60,50)
							draw.fillRect((c+2)*60+60,200+(r+2)*50,60,50)
							draw.fillRect((c+3)*60+60,200+(r+3)*50,60,50)
							draw.stroke()
             return bd[r][c];

        }
            }
    }
    // Check down-left
    for (r = 4; r < 7; r++){
        for (c = 0; c < 4; c++){
            if (chkLine(bd[r][c], bd[r-1][c+1], bd[r-2][c+2], bd[r-3][c+3])){
							draw.fillStyle="#ffff00"
							draw.fillRect(c*60+60,200+r*50,60,50)
							draw.fillRect((c+1)*60+60,200+(r-1)*50,60,50)
							draw.fillRect((c+2)*60+60,200+(r-2)*50,60,50)
							draw.fillRect((c+3)*60+60,200+(r-3)*50,60,50)
							draw.stroke()
							return bd[r][c];

            }
        }
    }
    return 0;
}
let xh=68;
let xc=0;
let turn=1;
id("trans-blue").style.backgroundColor  = "rgba(0,255,255,0.9)";
id("trans-red").style.backgroundColor  = "rgba(255,0,0,0.9)";
let transBlue=id("trans-blue");
let transRed=id("trans-red");
transRed.style.display="none";
document.addEventListener("keydown",function(e){
	let keycode=e.keyCode;
	console.log(keycode);
	let hicol=id("rect");
	console.log(xc+" col");
	if(keycode===39){
		if(xc===6){}else{
			xc++;
			xh+=60;
			console.log(xh)
			
  		let y=0;
  		for(let i =0;i<7;i++){
    		if(board[i][xc]===0){
     			 break;
    		}else{
      		y++;
				}
    	}
			if(y<7){
				console.log(y+" "+turn+" "+xh)
				if(turn===1){
					transRed.style.display="none"
					transBlue.style.display="block"
					transBlue.style.left=0+"px";
					transBlue.style.top=300-y*50+"px";
				}else{
					transBlue.style.display="none"
					transRed.style.display="block";
					transRed.style.left=0+"px";
					transRed.style.top=300-y*50+"px";
				}
			}
			hicol.style.left=xh+"px";
  }
		
	}else if(keycode===37){
		if(xc===0){}else{
			xc--;
			xh-=60;
  		let y=0;
  		for(let i =0;i<7;i++){
    		if(board[i][xc]===0){
     			 break;
    		}else{
      		y++;
				}
    	}
			if(y<7){
			console.log(y+" "+turn+" "+xh)
			if(turn===1){
				transRed.style.display="none"
				transBlue.style.display="block"
				transBlue.style.left=0+"px";
				transBlue.style.top=300-y*50+"px";
			}else{
				transBlue.style.display="none"
				transRed.style.display="block";
				transRed.style.left=0+"px";
				transRed.style.top=300-y*50+"px";
			}
			}
			hicol.style.left=xh+"px";
		}
	}else if(keycode===13){
		if(xc===7){}else{
			change(xc);
			if(turn===1){
				turn=2
			}else{
				turn=1
			}
		}
  		let y=0;
  		for(let i =0;i<7;i++){
    		if(board[i][xc]===0){
     			 break;
    		}else{
      		y++;
				}
    	}
			if(y<7){
			console.log(y+" "+turn+" "+xh)
			if(turn===1){
				transRed.style.display="none"
				transBlue.style.display="block"
				transBlue.style.left=0+"px";
				transBlue.style.top=300-y*50+"px";
			}else{
				transBlue.style.display="none"
				transRed.style.display="block";
				transRed.style.left=0+"px";
				transRed.style.top=300-y*50+"px";
			}
			}
		if(chktie(board)===1){
			id("p3").style.display="block";	
		}
	}
	// hicol.style.position="absolute";
	// hicol.style.left="70px";
	// hicol.style.top="210px";
  //if(e.keycode===37){
  //  if(xc===0){}
  //  else{
  //    xc--;
  //    draw.fillStyle = "#ffffff";
  //    //console.log("work")
  //    draw.fillRect(xc*60+60+1,500-y*50+1,58,48);
  //    if(winnert===0){
  //      let y=0;
  //      for(let i =0;i<7;i++){
  //        if(board[i][x]===0){
  //          break;
  //        }else{
  //          y++;
  //        }
  //      }
  //    }
  //    if(turn===1){
  //      draw.fillStyle = "#00ffff";
  //      //console.log("work")
  //      draw.fillRect(xc*60+60+1,500-y*50+1,58,48);
  //    }
  //    if(turn===2){
  //      draw.fillStyle = "#ff0000";
  //      //console.log("work")
  //      draw.fillRect(xc*60+60+1,500-y*50+1,58,48);
  //    }
  //  }
  //}
  //if(e.keycode===39){
  //  if(xc===6){
  //    xc++;
  //    draw.fillStyle = "#ffffff";
  //    //console.log("work")
  //    draw.fillRect(xc*60+60+1,500-y*50+1,58,48);
  //  }else{
  //    if(winnert===0){
  //      let y=0;
  //      for(let i =0;i<7;i++){
  //        if(board[i][x]===0){
  //          break;
  //        }else{
  //          y++;
  //        }
  //      }
  //    }
  //    if(turn===1){
  //      draw.fillStyle = "#00ffff";
  //      //console.log("work")
  //      draw.fillRect(xc*60+60+1,500-y*50+1,58,48);
  //    }
  //    if(turn===2){
  //      draw.fillStyle = "#ff0000";
  //      //console.log("work")
  //      draw.fillRect(xc*60+60+1,500-y*50+1,58,48);
  //    }
  //  }
  //}
  //if(e.keycode===40){
  //  board[y][xc]=turn;
  //  if(turn===1){
  //  turn=2;
  //  }
  //  else{
  //  turn=1
  //  }
  //}
})
let change =function(x){
 if(winnert===0){
  let y=0;
  for(let i =0;i<7;i++){
    if(board[i][x]===0){
      break;
    }else{
      y++;
    }
  }
 /*
    winner(y-1,x);
  /*
    num=1;
    t=0;
    winner(y+1,x);
    num2=1;
    num =1;
    t=0;
    winner(y,x-1);
    t=0;
    num=1;
    winner(y,x+1);
    t=0;
    num2=1;
    num =1;
    winner(y+1,x+1);
    t=0;
    num=1;
    winner(x-1,y-1)
    t=0;
    num2=1;
    num=1;
    winner(y-1,x+1);
    t=0;
    num=1;
    winner(y+1,x-1);
    */

  board[y][x]=turn;
  if(turn===1){
     draw.fillStyle = "#00ffff";
    //console.log("work")
    draw.fillRect(x*60+60+1,500-y*50+1,58,48);
  }
  if(turn===2){
     draw.fillStyle = "#ff0000";
    //console.log("work")
    draw.fillRect(x*60+60+1,500-y*50+1,58,48);
  }
        if(chkWinner(board)===0){}else{
      if(chkWinner(board)===1){
            document.getElementById("p1").style.display="block";
        winnert=1;
      }
  else{
    document.getElementById("p2").style.display="block";
    winnert=1;
  }
   }
  
 }
}
newBoard();
