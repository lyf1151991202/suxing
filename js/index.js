/*
* @Author: Administrator
* @Date:   2018-09-13 17:29:12
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-20 17:42:02
*/
window.onload = function(){
    // 轮播图
	let banner = document.querySelector(".banner-box");
	let bannerlist = document.querySelectorAll(".banner-box li");
	let dots = document.querySelectorAll(".point li");
	let lbtn = document.querySelectorAll(".banner-left");
	let rbtn = document.querySelectorAll(".banner-right");
	let widths = parseInt(getComputedStyle(banner,null).width);
	LRbanner(banner,dots,bannerlist,lbtn,rbtn,widths,"active");

    //顶部导航
    let header = document.querySelector(".header");
    let headera = document.querySelectorAll(".h-m-right li a");
    headera[0].classList.add("listhot");
    window.onscroll = function(){
         headera[0].classList.add("listhot");
    	let bodyTop = document.body.scrollTop || document.documentElement.scrollTop;
        // console.log(bodyTop)
    	if(bodyTop >= 20){
    		header.style = "background:#fff; 1px solid #e4eaec;";
    		headera.forEach((value,index)=>{
    			value.style.color = "#000";
    		})
    	}
    	if(bodyTop<20){
    		header.style = "background: rgba(255, 255, 255, .2);";
    		headera.forEach((value,index)=>{
    			value.style.color = "#fff";
    		})
    	}
        headera[0].style.color="#16b0dc";

        // 滚动动画
        let section = document.querySelectorAll(".section");
         let bouns = document.querySelectorAll(".bouns");
        let arr = [];
        section.forEach((value,index)=>{
            arr.push(value.offsetTop);
            // console.log(arr);
            // console.log(bouns);
        })
        arr.forEach((value,index)=>{
            if(bodyTop+innerHeight/3 >= 759){
                bouns[0].classList.add("bounceInDown");
                bouns[0].style="animation: bounceInDown 1s";
            }
            if(bodyTop+innerHeight/2 >= 1503){
                bouns[1].classList.add("bounceInDown");
                bouns[1].style="animation: bounceInDown 1s";
            }
            if(bodyTop+innerHeight/2 >= 2210){
                bouns[2].classList.add("bounceInDown");
                bouns[2].style="animation: bounceInDown 1s";
            }
            }
        )
        
        let ul=document.querySelectorAll(".s2-m-bottom");
        console.log(ul);
        let arr1 = [];
        ul.forEach((val)=>{
            arr1.push(val.offsetTop);
            console.log(arr1);
        })
        if(bodyTop+innerHeight/2>=1665-200){
            ul[0].classList.add("bounceInLeft");
            ul[0].style="animation: bounceInLeft 2s;";
            ul[1].classList.add("bounceInRight");
            ul[1].style="animation: bounceInRight 2s;";
        }





    }


    // 左右平移
    // let LRlbtn = document.querySelector(".go");
    // let LRrbtn = document.querySelector(".back");
    // let LRbigbox = document.querySelector(".s1-m-b-box");
    // let LRwidths = parseInt(getComputedStyle(LRbigbox).width)/10;
    // let s1box = document.querySelector(".s1box");

    // let n=0;

    // LRrbtn.onclick = function(){
    //     move();
    // }
    // LRlbtn.onclick = function(){
    //     n--;
    //     if(n===-1){
    //         n=0;
    //         LRbigbox.style.transform = "translateX(-3850px)"; 
    //     }
    //     LRbigbox.style.transform = "translateX("+(LRwidths*n)+"px)";
    // }
    // let t = setInterval(move,1000);
    // function move(){
    //      n++;
    //      if(n==8){
    //         n=0;
    //      }
    //    LRbigbox.style.transform = "translateX("+(-LRwidths*n)+"px)";
    // }
    // s1box.onmouseover=function(){
    //     clearInterval(t);
    // }
    // s1box.onmouseout=function(){
    //     t = setInterval(move,1000);
    // }




















}