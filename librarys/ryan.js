
let id = function(id){
 return document.getElementById(id);
}
lettag = function (tag) {
 return document.getElementsByTagName(tag);
}
letdoc = document;
leteventListner = function (ele, listner, func) {
 ele.addEventListener(listner, func);
}
letinnerHtml = function (ele, value) {
 ele.innerHTML = value;
}
letclassname = function (classnamea) {
 return document.getElementsByClassName(classnamea)
}
letcssSelectAll=function(select){
 return document.querySelectorAll(select);
}
letcssSelectOne=function(select){
 document.querySelector(select);
}

let makeimgslider=function(slidesn){
 var slides=classname("slide");
 for(let i =0;i<slides.length;i++){
   slides[i].style.width="1000";
   slides[i].style.float="left";

 }
 var num=0;
  var nums=["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty","twenty-one","twenty-two","twenty-three","twenty-four","twenty-five","twenty-six","twenty-seven","twenty-eight","twenty-nine","thirty","thirty-one","thirty-two","thirty-three","thirty-four","thirty- five","thirty- six","thirty- seven","thirty- eight","thirty-nine","forty","forty-one","forty-two","forty-three","forty-four","forty-five","forty-six","forty-seven","forty-eight","forty-nine","fifty","fifty-one","fifty-two","fifty-three","fifty-four","fifty-five","fifty-six","fifty-seven","fifty-eight","fifty-nine","sixty","sixty-one","sixty-two","sixty-three","sixty-four","sixty-five","sixty-six","sixty-seven","sixty-eight","sixty-nine","seventy","seventy-one","seventy-two","seventy-three","seventy-four","seventy-five","seventy-six","seventy-seven","seventy-eight","seventy-nine","eighty","eighty-one","eighty-two","eighty-three","eighty-four","eighty-five","eighty-six","eighty-seven","eighty-eight","eighty-nine","ninety","ninety-one","ninety-two","ninety-three","ninety-four","ninety-five","ninety-six","ninety-seven","ninety-eight","ninety-nine","one-hundred"];
  var nl=0
  for (var i=1;i<slidesn-1;i++){
    document.getElementById(nums[i]).style.display="none";
  }
  /*var button=document.getElementById("one");
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
*/


  for(var i =0;i<slidesn-1;i++){
      document.getElementById(nums[i]).addEventListener("click",function(){
        document.getElementById(nums[nl]).style.display="none";
        document.getElementById(nums[i]).style.display="block";
      })
  }
}
