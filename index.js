let days = document.querySelector('#days')
let hours = document.querySelector('#hours')
let minutes = document.querySelector('#minutes')
let seconds = document.querySelector('#seconds')

let interval = setInterval(() => {
  let currentdate = new Date().getTime()
  let comebackdate= new Date('feb,14 2023 09:00:00').getTime()
  let differencetime = comebackdate - currentdate

  let d = Math.floor(differencetime / (1000*60*60*24))
  days.innerHTML = d<10 ? '0'+d : d
  
  let h = Math.floor(differencetime % (1000*60*60*24)/(1000*60*60))
  hours.innerHTML = h<10 ? '0'+h : h

  let m = Math.floor(differencetime % (1000*60*60)/(1000*60))
  minutes.innerHTML = m<10 ? '0'+m : m

  let s = Math.floor(differencetime % (1000*60)/(1000))
  seconds.innerHTML = s<10 ? '0'+s : s
}, 1000);

document.body.addEventListener('click',(e)=>{
  let ripple = document.createElement('span')
  ripple.style.left=e.clientX + 'px'
  ripple.style.top=e.clientY + 'px'
  document.body.appendChild(ripple)
  setTimeout(() => {
    document.body.removeChild(ripple)
  }, 1000);
})