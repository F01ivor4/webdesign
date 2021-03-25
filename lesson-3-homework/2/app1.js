main();

function main() {
    document.querySelector('form').addEventListener('submit',submit);
    document.querySelector('ul').addEventListener('click',deleteFinish);
    document.getElementById('clear').addEventListener('click',clear);
}

function submit(element) {
    element.preventDefault();
    let input = document.querySelector('input');
    if (input.value!=''){
        addTask(input.value);
    }
    input.value = '';
}

function addTask(inputText) {
    let Task = document.createElement('li');
    Task.innerHTML = `<input type="checkbox"><label>${inputText}</label><span class="delete">×</span>`
    let ul = document.querySelector('ul');
    ul.appendChild(Task);
    document.querySelector('.tasksBoard').style.display = 'block';
}

function deleteFinish(element) {
    if (element.target.className=='delete'){
        deleteTask(element);
    }
    else if (element.target.type=='checkbox'){
        finishTask(element);
    }
}

function deleteTask(element) {
    let Task = element.target.parentNode;
    console.log(Task);
    let ul = document.querySelector('ul');
    ul.removeChild(Task);
}

function finishTask(element) {
    task = element.target.nextSibling;
    if(element.target.checked){
        task.style.textDecoration = "line-through";
        task.style.color = "#ff0000";
    } else {
        task.style.textDecoration = "none";
        task.style.color = "#2f4f4f";
    }
}

function clear(element) {
    let ul = document.querySelector('ul');
    ul.innerHTML = '';
}