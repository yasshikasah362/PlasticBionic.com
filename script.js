var ctrh, ctrw;
if(Window.innerWidth>500){
  ctrh= 1.5;
  ctrw= .7;
}
else{
  ctrh=.7;
  ctrw=2.2;
}

function initialization(){
    const scroller = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    })
    
    gsap.registerPlugin(ScrollTrigger)
    
    
    scroller.on('scroll', ScrollTrigger.update)
    
    ScrollTrigger.scrollerProxy(
        '#main', {
            scrollTop(value) {
                return arguments.length ?
                scroller.scrollTo(value, 0, 0) :
                scroller.scroll.instance.scroll.y
            },
            getBoundingClientRect() {
                return {
                    left: 0, top: 0, 
                    width: window.innerWidth,
                    height: window.innerHeight
                }
            }
        }
    )
    ScrollTrigger.addEventListener('refresh', () => scroller.update())
    
    
    ScrollTrigger.refresh()
}
initialization();
function nav(){
  document.querySelector("#nav")
.addEventListener("mouseenter",function(){
  gsap.to(".cover",{
    // stagger:.1,
    ease: Expo.easeInOut,
    duration: .5,
    height: "100%",
    
  })
  gsap.to(".cover span",{
    // stagger:.1,
    ease: Expo.easeInOut,
    duration: .5,
    opacity: 1,
    y:10
    
  })
})
document.querySelector("#nav")
.addEventListener("mouseleave",function(){
  gsap.to(" .one",{
    // stagger: .1,
    ease: Expo.easeInOut,
    duration: .5,
    height: "3px",
    
  })
  gsap.to(" .others",{
    // stagger: .1,
    ease: Expo.easeInOut,
    duration: .5,
    height: "0%"
    
  })
  gsap.to(".cover span",{
    // stagger:.1,
    ease: Expo.easeInOut,
    duration: .5,
    opacity: 0,
    y:0
    
  })
})
}
nav();

function textLine(){
  document.querySelectorAll("#text").
  forEach(function(text){
    text.addEventListener("mouseenter",function(dets){
      gsap.to(dets.target.children[1],{
        width: "100%",
        ease: Expo.easeInOut,
        duration:1
      })
    })
    text.addEventListener("mouseleave",function(dets){
      gsap.to(dets.target.children[1],{
        width: "0%",
        left:"100%",
        ease: Expo.easeInOut,
        duration:1,
        onComplete: function(){
          dets.target.children[1].style.left="0";
        }
      })
    })
  })
}
textLine();
function textanim(){
  var h1= document.querySelector("#fp h1");
    var clutter="";
    var j=0;
    for(var i=0; j<=Math.floor(h1.textContent.length/2); i++){
        clutter+=`<span data-delay="${i}">${h1.textContent.charAt(j)}</span>`;
            j++;
    }
    for(var i=Math.floor(h1.textContent.length/2)-1; i>=0; i--){
        clutter+=`<span data-delay="${i}">${h1.textContent.charAt(j)}</span>`;
            j++;
    }
    document.querySelector("h1").innerHTML=clutter;
    document.querySelectorAll("h1 span").forEach(function(elem) {
        gsap.to(elem,{
            ease:Expo.easeInOut,
            duration: 1,
            y:0,
            delay: elem.dataset.delay*.1
        })
        
    });
}
textanim();
function sareh1(){

  document.querySelectorAll("#text h1").forEach(function(harh1){
    var clutter="";
    harh1.textContent.split("").forEach(function(elem){
      if(elem === " "){
        clutter+=`<span>&nbsp;</span>`;
      }else{
        clutter+=`<span>${elem}</span>`;
      }
   
    })
    harh1.innerHTML=clutter;
  })
    
   document.querySelectorAll("#text h1").forEach(function(harh1){
    gsap.to(harh1.children,{
    
      scrollTrigger:{
        scroller:"#main",
      
        trigger:harh1,
        start:"top 80%"
      },
      y:0,
      duration:.5,
      stagger:.1,
      ease: Expo.easeInOut

    })
  })
  
  
}
// sareh1();
function cubeAnimation(){
  gsap.to("#fp img",{
    duration:1*3,
    stagger: 1,
    ease:"power3.easeInout",
    delay:0.8,
    display:"initial",
    
    
  })
  var t1= gsap.timeline();
t1.to("#cube",{
  // width:`${10 * ctrw}%`,
  height:`${40*ctrh}%`,
  duration:1,
  ease: "power3.easeInout",
  delay:0.2

})
.to("#cube",{
  width: `${30 * ctrh}%`,
  height: `${30 * ctrw}%`,
  duration:1,
  ease: "power3.easeInout",
  delay:0.2

})
.to("#cube",{
  width: `${20 * ctrw}%`,
  height: `${60 * ctrh}%`,
  duration:1,
  ease: "power3.easeInout",
  delay:0.2
  

})

.to("#fp h1 span",{
  duration:1,
  ease: Expo.easeInOut,
  y:"-200%"
})

.to("#cube",{
   height: "100%",
   width:"100%",
  ease:"circ.Inout",
  delay:.5,
  duration:1,
  onComplete: function(){
     
    document.querySelector("#fp").style.display="none";
    sareh1();

  }
  
 
})
};
cubeAnimation();