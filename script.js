
const allstar=document.querySelectorAll(".rating .star")
const ratingValue=document.querySelector('.rating input')
allstar.forEach((item,idx)=>{
    item.addEventListener('click',function(){
        let click=0
        ratingValue.value=idx+1
        console.log(ratingValue.value)
        allstar.forEach(i=>{
            i.classList.replace('bxs-star','bx-star')
            i.classList.remove('active')
        })
        for(let i=0;i<allstar.length;i++)
        {
            if(i<=idx)
            {
                allstar[i].classList.replace('bx-star','bxs-star')
                allstar[i].classList.add('active')
            }
            else{
                allstar[i].style.setProperty('--1',click)
                click++
            }
        }
    })
})
//popup
// let body=document.getElementsByTagName("body");
let popup3=document.getElementById("popup3");
 function openPopup(){
    popup3.style.display="flex";
 }
 function closepopup(){
    popup3.style.display="none";
 }
 
 

let ootySectionId=document.getElementById("ooty");
let locationName = document.getElementById("new");
let bookBtnEl = document.getElementById("bookButton");
let locationDate=document.getElementById("date");

bookBtnEl.addEventListener("click", () => {
if (locationName.value=== "Ooty"&&locationDate.value==="1 Day")
{
    window.location.href = "https://sutharsan879.github.io/Ooty_day1/";
} 
else if (locationName.value=== "Ooty"&&locationDate.value==="2 Days")
{
    window.location.href = "https://sutharsan879.github.io/Ooty_day2/";
} 
else if (locationName.value=== "Ooty"&&locationDate.value==="3 Days")
{
    window.location.href = "https://sutharsan879.github.io/Ooty_day3/";
} 
else if(locationName.value==="Yercaud" && locationDate.value==="1 Day")
{
    window.location.href="https://sutharsan879.github.io/Yercaud_day1/";
}
else if(locationName.value==="Yercaud" && locationDate.value==="2 Days")
{
    window.location.href="https://sutharsan879.github.io/Yercaud_day2/";
}
else if(locationName.value==="Yercaud" && locationDate.value==="3 Days")
{   
    window.location.href="https://sutharsan879.github.io/Yercaud_day3/";
}
else if(locationName.value==="Kodaikanal" && locationDate.value==="1 Day")
{
    window.location.href="Kodaikanal/Kodaikanal1.html";
}
else if(locationName.value==="Kodaikanal" && locationDate.value==="2 Days")
{
    window.location.href="Kodaikanal/Kodaikanal2.html";
}
else if(locationName.value==="Kodaikanal" && locationDate.value==="3 Days")
{
    window.location.href="Kodaikanal/Kodaikanal3.html";
}
else if(locationName.value==="Thanjavur" && locationDate.value==="1 Day")
{
    window.location.href="Thanjavur/Thanjavur1.html";
}
else if(locationName.value==="Thanjavur" && locationDate.value==="2 Days")
{
    window.location.href="Thanjavur/Thanjavur2.html";
}
else if(locationName.value==="Thanjavur" && locationDate.value==="3 Days")
{
    window.location.href="Thanjavur/Thanjavur3.html";
}
});


const menuBtn=document.querySelector(".nav-menu-btn");
const closeBtn=document.querySelector(".nav-close-btn");
const navigation=document.querySelector(".navigation");
const navItems=document.querySelectorAll(".nav-items a");
menuBtn.addEventListener("click",()=>{
    navigation.classList.add("active");
});
closeBtn.addEventListener("click",()=>{
    navigation.classList.remove("active");
});
navItems.forEach((navItem)=>{
    navItem.addEventListener("click",()=>{
        navigation.classList.remove("active");
    });
});
