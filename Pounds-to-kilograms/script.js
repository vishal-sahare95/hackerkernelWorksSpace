

function converter(){
let pondInput=document.getElementById('pond').value
let output= document.getElementById('output')
  const tptalk=pondInput* 0.5
  output.innerHTML=`${pondInput} pond = ${tptalk} km`
  output.classList.add("bg-primary");
}

