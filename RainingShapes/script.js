let circle = document.querySelector(".circle");
let area = document.querySelector(".area");
let body = document.querySelector("body");
let text = document.querySelector("h1");
var audio = new Audio('bubbles.mp3');
let btn = document.querySelector(".rainBtn");
btn.addEventListener('click', () => {
        btn.style.opacity = "0";
			   setInterval(function() {
                let randomLeft = Math.floor(Math.random()* 96);
                let randomTop = Math.floor(Math.random()* 90);
                let randomColor = Math.floor(Math.random()* 999999);
                let randomWidthHeight = Math.floor(Math.random()* 80);
                let randomRadius = Math.floor(Math.random()*80);
                let borderW = Math.floor(Math.random()*25);
                 
                let child = document.createElement("div");
          let arr = ["triangle", "circle", "c", "b"];
          let rArr = Math.floor(Math.random()* arr.length);
         console.log(rArr);
          if (rArr == 0) {
              area.appendChild(child).classList.add("active");

              child.style.width = "0";
              child.style.height = "0";
              child.style.left = randomLeft + "%";
              child.style.top = randomTop + "vh";
              child.style.borderLeftWidth = borderW + "px";
              child.style.borderRightWidth = borderW + "px";
              child.style.borderBottomWidth = (borderW*2) + "px";
              child.style.borderBottomColor = "#"+ randomColor; 
          } else {
			        /* let randomLeft = Math.floor(Math.random()* 96);
              	let randomTop = Math.floor(Math.random()* 90);
              	let randomColor = Math.floor(Math.random()* 999999);
              	let randomWidthHeight = Math.floor(Math.random()* 80);
                let randomRadius = Math.floor(Math.random()*80);

              	let child = document.createElement("div");
*/
              area.appendChild(child).classList.add("circle");
              child.style.width = randomWidthHeight + "px";
              child.style.height = randomWidthHeight + "px";
         	    child.style.left = randomLeft + "%";
         	    child.style.top = randomTop + "vh";
              child.style.border = "2px solid white";
              child.style.borderRadius = randomRadius+"%";
         	    child.style.backgroundColor = "#"+ randomColor;
              audio.play();
}
         	}, 15);

        /*setInterval(function() {
          let backGround = Math.floor(Math.random()* 99);
          let backGroundB = Math.floor(Math.random()* 99);
          body.style.backgroundColor = "#00"+backGroundB+"00";
          body.style.transition = "all 0.5s ease-in-out";
        }, 1000);  */

        
	});
 
   document.setTimeout(function() {
    btn.style.opacity = "1";
   }, 3000);     