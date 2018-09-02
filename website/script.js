const button = document.getElementById("button");
function color(){

  const text = document.getElementById("mytext").value;
  //console.log("worked");
  if( text !== null){

      document.getElementById("show").innerHTML=text;
    let bg = prompt("what color background hex code(#000000) or base color"  );
    let textcol=prompt("what color text hex code(#000000) or base color ");
    document.getElementById("show").style.background=bg;
    document.getElementById("show").style.color=textcol;
    document.getElementById("show2").style.background=bg;
    document.getElementById("show2").style.color=textcol;
    document.getElementById("show2").innerHTML="";
 
  }
}
function format(){
    let els=[];
    const text = document.getElementById("mytext").value;
    let br=document.createElement("br");
    document.getElementById("show2").appendChild(br);
    for(let i =0;i<text.length;i++){
        let el = document.createElement("span");
        el.innerHTML=text[i];
        els.push(el);
        document.getElementById("show2").appendChild(el);
    }
    let type=prompt("style (i for italic,b for bold)");
    
        if(type==="b"){
            let char=prompt("charactors first=0");
            for(let i = 0;i<char.length;i++){
            els[i].style.fontWeight="bold";
            }
        }

       else  if(type==="i"){
            let char=prompt("charactors first=0");
            for(let i = 0;i<char.length;i++){
            els[i].style.fontStyle="italic";
            }
        }
}
function random(){
    //const value = document.getElementById("mytext").value;
    const text = document.getElementById("mytext").value;
    let numone=Math.round(Math.random()*9);
    let numtwo =Math.round(Math.random()*9);
    let numthree=Math.round(Math.random()*9);
    document.getElementById("show").style.background="#"+numone+numtwo+numthree;
    document.getElementById("show").style.color="white";
    document.getElementById("show2").style.background="#"+numone+numtwo+numthree;
    document.getElementById("show2").style.color="white";
    document.getElementById("show").innerHTML=text; 
    document.getElementById("show2").innerHTML="";
    let els=[];
    
    for(let i =0;i<text.length;i++){
        let el = document.createElement("span");
        el.innerHTML=text[i];
        els.push(el);
        console.log(el);
        document.getElementById("show2").appendChild(el);
    }
    let type=Math.round(Math.random());
    let char="";
    for(let i = 0;i<text.length;i++){
        char+=i;
    }
    console.log(type);
        if(type===0){
            for(let i = 0;i<char.length;i++){
            els[i].style.fontWeight="bold";
            }
        }

       else  if(type===1){
            for(let i = 0;i<char.length;i++){
            els[i].style.fontStyle="italic";
            }
        }
    
}
button.addEventListener("click",function(){
//for(let i =0;i<50;i++){
    color();
    format();
    //window.setTimeout(functiMn(){},5000);
//}
    })
document.getElementById("button2").addEventListener("click",function(){
    random();
});