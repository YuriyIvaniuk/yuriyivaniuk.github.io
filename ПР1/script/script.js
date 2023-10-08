const iconWrap = document.getElementById('iconWrap')
const iconOpen = document.getElementById('iconOpen')
const iconClose = document.getElementById('iconClose')
const mainMenu = document.getElementById('mainMenu')




iconWrap.addEventListener('click',() => {
	mainMenu.classList.toggle('hide-menu')
	iconOpen.classList.toggle('hide')
	iconClose.classList.toggle('hide')
	toggleScrollLock();
})
const aboutButton=document.getElementById("aboutButton")
const aboutPoint=document.getElementById("aboutPoint");
aboutButton.addEventListener("click", function(){
aboutPoint.scrollIntoView({behavior:"smooth"});
}) 
const skillsButton=document.getElementById("skillsButton")
const skillsPoint=document.getElementById("skillsPoint");
skillsButton.addEventListener("click", function(){
skillsPoint.scrollIntoView({behavior:"smooth"});
})
const portfolioButton=document.getElementById("portfolioButton")
const latestButton=document.getElementById("latestButton");
const portfolioPoint=document.getElementById("portfolioPoint");
portfolioButton.addEventListener("click", function(){
portfolioPoint.scrollIntoView({behavior:"smooth"});
})
latestButton.addEventListener("click", function(){
portfolioPoint.scrollIntoView({behavior:"smooth"});
})
const getInButton=document.getElementById("get-inButton")
const getInPoint=document.getElementById("get-inPoint");
getInButton.addEventListener("click", function(){
getInPoint.scrollIntoView({behavior:"smooth"});
})
const topButton=document.getElementById("topButton")
const topPoint=document.getElementById("topPoint")
topButton.addEventListener("click", function(){
topPoint.scrollIntoView({behavior:"smooth"});
})
