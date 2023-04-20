

let i=0
const inerval=setInterval(()=>{
     let li=document.createElement('li')
 timeIntervalData.appendChild(li)
 li.innerText=i++;
 if(i>10){

    clearInterval(inerval)
 }

},1000)
