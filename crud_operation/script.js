let taskInput=document.querySelector('#taskInput')
let dataContainer=document.querySelector('#data-container')
const data=[]
function addData(){
    if(taskInput.value ===''){
        alert('enter task')
    }
    else{
        // let li=document.createElement('li') 
        // let actionContainer=document.createElement('div')
        // let deleteList=document.createElement('span')
        // let editList=document.createElement('span')

        // dataContainer.appendChild(li)

        // li.innerHTML=taskInput.value
        // li.appendChild(actionContainer)
        // li.classList.add("d-flex", "justify-content-between","p-3","m-3" ,"bg-success");

        // actionContainer.appendChild(deleteList)
        // deleteList.classList.add("bi", "bi-trash","text-danger","fw-bold");

        // actionContainer.appendChild(editList)        
        // editList.classList.add("bi", "bi-pencil-square");


        dataContainer.innerHTML += `
  <div class='d-flex justify-content-between m-3 bg-success'>
    <p>${taskInput.value}</p>
    <span class="options ">
      <i  class="bi bi-trash" onClick="deleteData(this)"></i>
      <i class="bi bi-pencil-square" onClick="editData(this)"></i>
    </span>
  </div>
  `;

    }
    taskInput.value=''
   
}


let deleteData = (e) => {
 console.log(e);
    e.parentElement.parentElement.remove();
  };

  let editData = (e) => {
    if(taskInput.value !==e.parentElement.previousElementSibling.innerHTML){
    taskInput.value = e.parentElement.previousElementSibling.innerHTML;
    console.log( e.parentElement.previousElementSibling.innerHTML);
    deleteData(e)
    }
    else{
        e.parentElement.previousElementSibling.innerHTML
    }


  }



