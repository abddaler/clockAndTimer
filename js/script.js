const hour         = document.querySelector('.h'),
      min          = document.querySelector('.m'),
      sec          = document.querySelector('.s'),
      hoursNum     = document.querySelector('.hours'),
      secondsNum   = document.querySelector('.seconds'),
      milsecondsNum= document.querySelector('.milliseconds'),
      minutesNum   = document.querySelector('.minutes'),
      body         = document.querySelector('body');
      
function clock() {
      let time    = new Date(),
          seconds = time.getSeconds() * 6, // 0 -> 360
          minutes = time.getMinutes() * 6, // 0 -> 360
          hours   = time.getHours() * 30; // 0 -> 720

          sec.style  = `transform: rotate(${seconds}deg)`
          min.style  = `transform: rotate(${minutes}deg)`
          hour.style = `transform: rotate(${hours}deg)`
        
       hoursNum.innerHTML   = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
       minutesNum.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
       secondsNum.innerHTML = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()
       milsecondsNum.innerHTML = time.getMilliseconds() < 10 ? '00' + time.getMilliseconds() : time.getMilliseconds() >=10 && time.getMilliseconds() < 100 ? '0' + time.getMilliseconds() : time.getMilliseconds(); 
      
   
       setTimeout(() => clock(), 1)
    }

    clock()

    function bgChanger(time=new Date()) {
        if (time.getHours() >= 0 && time.getHours() <= 4) {
            body.style = `background: url(img/bg1.gif); background-repeat: no-repeat; background-size: cover; background-position: center;`
        } else if (time.getHours() >= 5 && time.getHours() <= 9){
            body.style = `background: url(img/bg3.gif); background-repeat: no-repeat; background-size: cover; background-position: center;`
        } else if (time.getHours() >= 10 && time.getHours() <= 16){
            body.style = `background: url(img/bg2.gif); background-repeat: no-repeat; background-size: cover; background-position: center;`
        } else if (time.getHours() >= 17 && time.getHours() <= 22){
            body.style = `background: url(img/bg4.gif); background-repeat: no-repeat; background-size: cover; background-position: center;`
        } else if (time.getHours() >= 23 && time.getHours() <= 24){
            body.style = `background: url(img/bg1.gif); background-repeat: no-repeat; background-size: cover; background-position: center;`
        }
    }

    bgChanger()

const links = document.querySelectorAll('.tabsItem'),
    tabs  = document.querySelectorAll('.tabsContentItem');

        for (let i = 0; i < links.length; i++) {
              links[i].addEventListener('click', function (e) {
                  e.preventDefault()
                  for (let x = 0; x < links.length; x++) {
                      links[x].classList.remove('active');
                      tabs[x].classList.remove('active')
                  }
                  tab(this, tabs[i])
              })
          }
        function tab(el, arr) {
              el.classList.add('active')
              arr.classList.add('active')
        }

const swHours = document.querySelector('.stopwatch__hours'),
      swMinutes = document.querySelector('.stopwatch__minutes'),
      swSeconds = document.querySelector('.stopwatch__seconds'),
      swBtn = document.querySelector('.btn1'),
      swBtn2 = document.querySelector('.btn2'),
      swBtn3 = document.querySelector('.btn3');

let   ns = 00,
      nm = 00,
      nh = 00,
      int = 0;

function swStart(){
        swSeconds.innerHTML = ns;
        swHours.innerHTML = nh;
        swMinutes.innerHTML = nm;
        ns++
    if (ns > 59) {
        nm++;
        ns = 0
    } else if(nm > 59){
        nh++;
        nm = 0
    }
    swSeconds.innerHTML = ns <= 9 ? '0' + ns : ns;
    swMinutes.innerHTML = nm <= 9 ? '0' + nm : nm;
    swHours.innerHTML = nh <= 9 ? '0' + nh : nh;   
};


swBtn.addEventListener('click', function(){
    setTimeout(() => {
        swBtn.style = 'display:none'
        swBtn2.style = 'display:block'
        int = setInterval(swStart, 1000)
    }, 1);
    })
 
swBtn2.addEventListener('click', function(){
    setTimeout(() => {
        swBtn2.style = 'display:none'
        swBtn3.style = 'display:block'
        clearInterval(int) 
    }, 1);
})

swBtn3.addEventListener('click', function (){     
    setTimeout(() => {
        swBtn3.style = 'display:none'
        swBtn.style = 'display:block'
        
        ns = 00,
        nm = 00,
        nh = 00;
        
        swSeconds.innerHTML = ns;
        swHours.innerHTML = nh;
        swMinutes.innerHTML = nm;
    swSeconds.innerHTML = ns <= 9 ? '0' + ns : ns;
    swMinutes.innerHTML = nm <= 9 ? '0' + nm : nm;
    swHours.innerHTML = nh <= 9 ? '0' + nh : nh;
    }, 1)
    }
)