
let notes = document.querySelector('.all-notes ul');
// let date = new Date();
// let currentDate = date.toLocaleString();
// let currentDate =`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} @
//  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

// delete activity
notes.addEventListener('click', (e) => {
    if (e.target.className == "delete") {
        const del = e.target.parentElement;
        notes.removeChild(del);
    }
})

// edit activity


// add new activity
const addForm = document.querySelector('#add-activity');
// const submitBtn = document.querySelector('#submitBtn');

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log("form was captured successfully");
    const activityTopic = addForm.querySelector('input[type="text"]').value;
    const activityNote = addForm.querySelector('.textarea').value;

    const newLi = document.createElement('li');
    const newH4 = document.createElement('h4');
    const noteSpan = document.createElement('span');
    const editSpan = document.createElement('span');
    const deleteSpan = document.createElement('span');
    const dateCreated = document.createElement('span');

    newH4.setAttribute('id', 'topic')
    noteSpan.classList.add('note');
    editSpan.classList.add('edit');
    deleteSpan.classList.add('delete');
    dateCreated.classList.add('date-created');

    newH4.textContent = activityTopic;
    noteSpan.textContent = activityNote;
    deleteSpan.textContent = 'delete';
    editSpan.textContent = 'edit';
    dateCreated.textContent = `date created: ${new Date().toLocaleString()}`;

    newLi.appendChild(newH4);
    newLi.appendChild(noteSpan);
    newLi.appendChild(editSpan);
    newLi.appendChild(deleteSpan);
    newLi.appendChild(dateCreated);
    notes.appendChild(newLi);

    addForm.reset();
})

// making nav-menu actively
// const navMenu = document.querySelector('#nav-panel .nav-menu');
// const panels = document.querySelectorAll('.panel');

// navMenu.addEventListener('click', (e) => {
//     e.preventDefault();
//     if (e.target.tagName == 'LI') {
//         const targetPanel = document.querySelector(e.target.dataset.target);
//         Array.from(panels).forEach((panel) => {
//             if (panel == targetPanel) {
//                 panel.classList.add('active');
//             } else {
//                 panel.classList.remove('active')
//             }
//         })
//     }
// })

const tabs = document.querySelector('.nav-menu');
const panels = document.querySelectorAll(".panel");

tabs.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.tagName == "LI") {
        const targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach((panel) => {
            if (panel == targetPanel) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        })
    }
})
