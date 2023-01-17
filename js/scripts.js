function getCurrenDate() {
    let dateNow = document.querySelector('#date')
    let currentDate = new Date()
    let day = currentDate.getDate()
    let month = currentDate.getMonth() + 1
    let year = currentDate.getFullYear()

    if (day < 10) {  // without this if, for first fay of month it writes "1"
        day = `0${day}`  // with this, it writes "01"
    }
    if (month < 10) {  // same reason as day if condition
        month = `0${month}`
    }

    dateNow.innerHTML = `${day}/${month}/${year}`
}
getCurrenDate()

function addNewTask() {
    let list = document.querySelector('#list')
    let task = document.querySelector('#new-task').value
    let newLi = document.createElement('li')
    newLi.setAttribute("class", "added-task")
    let newChbx = document.createElement('input')
    newChbx.setAttribute("type", "checkbox")
    newChbx.setAttribute("class", "check")
    newChbx.setAttribute("onchange", "taskDone()")
    let newHr = document.createElement('hr')
    newLi.innerHTML = task

    if (task) {
        list.append(newLi)
        newLi.append(newChbx)
        list.append(newHr)
    }
    
    document.querySelector('#new-task').value = ""
}

function taskDone() {
    let checkBox = document.querySelector('.check')
    let madde = document.querySelector('.added-task')
    if (checkBox.checked == true) {
        madde.classList.add("txt-line-through")
    } else {
        madde.classList.remove("txt-line-through")
    }
}