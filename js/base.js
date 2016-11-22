init();
function init(){
	if(!document.addEventListener){
	    window.open('../浏览器/index.html','_self')
	    return
	}
/*******网站导航********/
var webBox=document.getElementsByClassName('web-box')[0];
var webTitle=document.getElementsByClassName('web-title')[0];
var webNav=document.getElementById('web-nav');
var weiBo=document.getElementsByClassName('weibo')[0];
var weiBoDis=document.getElementsByClassName('weibo-display')[0];
var weixin=document.getElementsByClassName('weixin')[0];
var code1=document.getElementsByClassName('code')[0];
webNav.onmouseover=function(){
	webTitle.style.cssText="background: #fff;border-left:1px solid #aaa;border-right:1px solid #aaa;border-top:1px solid #aaa;z-index: 999;"
	webBox.style.display="block";
}
webNav.onmouseout=function(){
	webTitle.style.cssText=""
	webBox.style.display="none";
}
weiBo.onmouseover=function(){
	weiBoDis.style.display="block";
}
weiBo.onmouseout=function(){
	weiBoDis.style.display="none";
}
weixin.onmouseover=function(){
	code1.style.display="block";
}
weixin.onmouseout=function(){
	code1.style.display="none";
}
/************中间图片自动播放*******/
var picBox=document.getElementsByClassName('pic-box')[0];
var Img=picBox.getElementsByTagName('img');
var picTxt=picBox.getElementsByTagName('p');
var dot=document.getElementsByClassName('dot')[0];
var numberBox=dot.getElementsByTagName('li');
for(var i=0;i<numberBox.length;i++){
	numberBox[i].index=i;
	numberBox[i].onmouseover=function(){
		for(var j=0;j<numberBox.length;j++){
			numberBox[j].id="";
			Img[j].style.display="none";
			picTxt[j].style.display="none";
		}
		this.id="active";
		Img[this.index].style.display="block";
		picTxt[this.index].style.display="block";
	}
}
var move=0;
function re(){
	for(var j=0;j<numberBox.length;j++){
			numberBox[j].id="";
			Img[j].style.display="none";
			picTxt[j].style.display="none";
		}
	move++;
	if(move>numberBox.length-1){
		move=0;
	}
	numberBox[move].id="active";
	Img[move].style.display="block";
	picTxt[move].style.display="block";
}
setInterval(re,2000);
/**********游戏截图****/
var zuo=document.getElementById('zuo');
var active1=document.getElementById('active1');
var oUl=document.getElementsByClassName('screenshot-picture fl')[0];
var aLi=oUl.getElementsByTagName('li');
var numLeft=0,len=aLi.length
zuo.onclick=function(){
	var curLeft = oUl.offsetLeft;
	if(curLeft=92){
	oUl.style.left=0+"px";}
	else{
		numLeft--;
		if(numLeft<0){
		numLeft=len-1;
		}
	oUl.style.left=-330*numLeft+"px";
	}	
}
active1.onclick=function(){
	var curLeft = oUl.offsetLeft;
	console.log(curLeft);
	if(curLeft>=-238){
	numLeft++;
	if(numLeft===len)
	numLeft=0;
	oUl.style.left=-330*numLeft+"px";}
}
function goLeft(){
	var timerL = setInterval(function(){
		var curLeft = oUl.offsetLeft;
		if(curLeft <= -238){
			clearInterval(timerL);
			goRight();
		}
		numLeft++;
		zuo.style.color="#000";
		active1.style.color="#1AC269";
		oUl.style.left=-330*numLeft+"px";
	},2000)
}
function goRight(){
	var timerR = setInterval(function(){
		var curLeft = oUl.offsetLeft;
		console.log(curLeft)
		if(curLeft >= -238){
			clearInterval(timerR);
			goLeft();
		}
		numLeft--;
		zuo.style.color="#1AC269";
		active1.style.color="#000";
		oUl.style.left=-330*numLeft+"px";
		
	},2000)
}
goLeft()
/***********扫二维码******/
var saoBox=document.getElementsByClassName('sao-box')[0];
var ma=saoBox.getElementsByTagName('img')[0];
saoBox.onmouseover=function(){
	ma.style.display="block"
}
saoBox.onmouseout=function(){
	ma.style.display="none"
}
/*******返回顶部*****/
var backTop=document.getElementsByClassName('icon-jiantou iconfont')[0];
window.onscroll=function(){
	var scrollT=document.documentElement.scrollTop||document.body.scrollTop;
		backTop.onclick=function(){
			document.documentElement.scrollTop=0;
			document.body.scrollTop=0;
		}
		if(scrollT>550)
		{
			backTop.style.display="block";
		}else{
			backTop.style.display="none";
		}
}

}



