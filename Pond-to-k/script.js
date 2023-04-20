

function converter(){
let pondInput=document.getElementById('pond').value
let output= document.getElementById('output')
  const total=pondInput* 0.5
  output.innerHTML=`${pondInput} pond = ${total} kg`
  output.classList.add("bg-primary");
}

