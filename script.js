document.addEventListener('DOMContentLoaded', function main(){
//Declare basic values
var dailyMeleeCap = 750000;
var dailyOtherCap = 500000;
var buttn = document.getElementById('boto');

//Clicking button 'Calculate' runs the event below
buttn.addEventListener("click",function(){
//get xp values from levels
var targAtt = findXp(document.getElementById('targ1').value);
var targStr = findXp(document.getElementById('targ2').value);
var targOtherDef = findXp(document.getElementById('targ3').value);
var targOtherRan = findXp(document.getElementById('targ4').value);
var targOtherMag = findXp(document.getElementById('targ5').value);
//att and str fields
var result = dailyMeleeCap-(targAtt+targStr+targOtherMag);
document.getElementById('att1').value = dailyMeleeCap-result; //Updates used xp
document.getElementById('att2').value = result; //Updates remaining xp
//Other fields
var otherRes = dailyOtherCap-(targOtherDef+targOtherRan);
document.getElementById('str1').value = dailyOtherCap-otherRes; // Used xp
document.getElementById('str2').value = otherRes; // remaining xp
//Calc and update daily cap - broken atm
var dailyCap = 500000 -(((dailyMeleeCap-result)/1.5)+(dailyOtherCap-otherRes))
document.getElementById('rem').value = Math.round(dailyCap*1.5).toFixed()
document.getElementById('rem1').value = Math.round(dailyCap).toFixed()
//Update XP fields
document.getElementById('targ12').value = targAtt;
document.getElementById('targ22').value = targStr;
document.getElementById('targ32').value = targOtherDef;
document.getElementById('targ42').value = targOtherRan;
document.getElementById('targ52').value = targOtherMag;
});

// Get level based on xp
function findLevel(xp){
	if(xp>=200000000)
	var level=126;
	else{
  var level=0;
  var points=0;
  var check=0;
  var num=1;
  while(check<=xp){
  var a=num/7;points=points+ Math.floor(num+ 300*Math.pow(2,a));check=Math.floor(points/4);num++;level++;}}
return level;}

//Get xp based on level
function findXp(level){
level--;
var xp=0;
var num=1;
while(level>0){
var a=num/7;xp=xp+ Math.floor(num+ 300*Math.pow(2,a));num++;level--;}
xp=Math.floor(xp/4);
return xp;}
});
