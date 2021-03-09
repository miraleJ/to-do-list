class Task {
    static tasksCounter = 0

    constructor(str = '') {
        this.taskStr = str;
        this.id = Task.tasksCounter++;
        this.done = false;
    }

    toString() {
        return `[${this.done ? 'v' : ' '}] [${this.id}] ${this.taskStr}`;
    }

    update(str) {
        this.taskStr = str;
    }

    setDone() {
        this.done = !this.done;
    }
}

class ToDoList {
    constructor() {
        this.taskList = [];
        this.complitedList = [];
    }

    get taskListCopy() {
        return this.taskList.map(v => v);
    }

    toString() {
        let str = ``;
        for (let i = 0; i < this.taskList.length; i++) {
            str = `${str.concat(this.taskList[i].toString())}
`;
        }
        for (let i = 0; i < this.complitedList.length; i++) {
            str = `${str.concat(this.complitedList[i].toString())}
`;            
        }
        return str;
    }

    create(str) {
        const task = new Task(str);
        this.taskList.push(task);
    }

    delete(str) {
        // if the task is in the list
        let tI = this.taskListCopy.findIndex(t => t.taskStr === str);
        if (tI !== -1) {
            this.taskList.splice(tI, 1);
        } else {
            // if the task is in the complited list
            tI = this.complitedList.findIndex(t => t.taskStr === str);
            if (tI !== -1) {
                this.complitedList.splice(tI, 1);
            }
        }
    }

    read(_taskId) {
        // if the task is in the list
        const tI = this.taskListCopy.findIndex(t => t.id === _taskId);
        if (tI !== -1) {
            return this.taskList[tI].toString();
        } else {
            // if the task is in the list
            const tI = this.complitedList.findIndex(t => t.id === _taskId);
            if (tI !== -1) {
                return this.complitedList[tI].toString();
            } else {
                return 'The task id was not found in the tasks list';
            }
        }
    }

    update(_taskId, str) {
        // if the task is in the list
        const tI = this.taskListCopy.find(t => t.id === _taskId);
        if (tI) {
            return tI.update(str);
        } else {
            return 'The task id was not found in the tasks list';
        }
    }

    setDone(_taskId) {
        // if the task is in the list
        const tI = this.taskListCopy.findIndex(t => t.id === _taskId);
        if (tI !== -1) {
            let temp = this.taskList[tI];
            let flag = this.taskList[tI].setDone();
            // remove from its place
            this.taskList.splice(tI, 1);
            // push in the end
            this.taskList.push(temp);

            return flag;
        } else {
            return 'The task id was not found in the tasks list';
        }
    }
}

const myList = new ToDoList();
myList.create('aaa');
myList.create('bbb');
myList.create('ccc');
myList.create('ddd');

console.log(myList.toString());

myList.delete('abc');
myList.delete('bbb');
myList.delete('ddd');

console.log(myList.read(2));
console.log('');
myList.create('eee');
myList.create('fff');
myList.create('ggg');
myList.create('hhh');

myList.update(5, 'iii');

console.log(myList.toString());
console.log('');
myList.setDone(0);
myList.setDone(4);
myList.setDone(7);
myList.setDone(6);
console.log('');
console.log(myList.toString());
console.log('');
myList.delete('aaa');
console.log(myList.toString());
// return `'${str}' task was removed. The new List is: ${this.taskListCopy}`;
//         } else {
//             return `No task as '${str}' in your list. The list is: ${this.taskListCopy}`;