document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault();
    const textbox = document.querySelector('#new-task-description');
    // console.log(textbox.value);
    buildToDo(textbox.value);
  })
});

function buildToDo(todo){
  let li = document.createElement('li');
  let btn = document.createElement('button');
  btn.addEventListener('click', deleteItem);
  btn.innerText = 'X';
  li.innerText = `${todo}  `;
  document.querySelector('#tasks').appendChild(li);
  li.appendChild(btn);
  
  let select = document.querySelector('#priority');
  if (select.options[select.selectedIndex].value == 'green'){
    btn.style.backgroundColor = 'green';
  } 
  else if (select.options[select.selectedIndex].value == 'yellow'){
    btn.style.background = 'yellow';
  } 
  else if (select.options[select.selectedIndex].value == 'red'){
    btn.style.background = 'red';
  } 
}

function deleteItem(e){
  e.target.parentNode.remove();
}