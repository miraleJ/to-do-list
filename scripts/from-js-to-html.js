let myFocusList = null;

// make a task div from a task obj
function makeTaskDiv(newTask) {
    const task =  document.createElement('div');
    task.innerText = newTask.taskStr;
    return task;
}

function createHandler() {
    // if pressed enter
    if (event.keyCode == 13) {
        event.preventDefault();
        const list = document.querySelector('.todo-list');
        list.insertBefore(makeTaskDiv(myFocusList.create(document.querySelector('#add-task').value)), list.firstChild);
    }
}

(() => {
    // if there is local storage - load from it
    // let localS = window.localStorage;
    let localS;
    if (localS) {
        // restore all
    } else {
        myFocusList = new ToDoList();
    }
    
    // create listener - click on the last child
    document.querySelector('.todo-list').lastElementChild.addEventListener('keypress', createHandler);
    // delete listener - (on?)mousemove on every task
    // update listener - (on)dblclick on every task
    // set done listener - click on square
})()