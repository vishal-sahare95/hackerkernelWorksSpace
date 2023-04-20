let timeOutData= document.getElementById('timeOutData')
   timeOutData.innerHTML='waitting ...' 
    setTimeout(()=>{
timeOutData.innerHTML=''
for(let i=0;i<10;i++){

 let li=document.createElement('li')
 timeOutData.appendChild(li)
li.innerText=i
  
}},7000)



