
let notes = document.querySelector('.all-notes ul');
const addForm = document.querySelector('#add-activity');
const activityTopic = addForm.querySelector('input[type="text"]');
const activityNote = addForm.querySelector('.textarea');
const postedTopic = document.querySelectorAll('#topic')
const postedNote = document.querySelectorAll('#note')

// delete activity
notes.addEventListener('click', (e) => {
    if (e.target.className == "delete") {
        const del = e.target.parentElement;
        notes.removeChild(del);
    }
})

// seach activities


// edit activity
const addActivity = document.querySelector('.add-new-activity');
const editButton = document.querySelector('.edit');
notes.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.className == 'edit') {
        this.postedTopic.value = activityTopic.value;
        this.postedNote.value = activityNote.value;
    }
})

// function for font awesome icon
const addNewActivity = document.querySelector('.add-new-activity');
const descrpt = document.querySelector('#description');
const activityIcon = document.querySelector('#a-icon');

activityIcon.addEventListener('mouseover', (e) => {
    e.preventDefault();
    descrpt.style.display = "block";
});

activityIcon.addEventListener('mouseleave', (e) => {
    e.preventDefault();
    descrpt.style.display = "none";
});

activityIcon.addEventListener('click', (e) => {
    e.preventDefault();
    if (addNewActivity.style.display == "none"){
        addNewActivity.style.display = "block";
        addNewActivity.scrollIntoView({behavior: "smooth"});
    } else {
        addNewActivity.style.display = "none";
        document.querySelector('body').scrollIntoView({behavior: "smooth"});
    }
})

// add new activity
addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log("form was captured successfully");
    let topicValue = activityTopic.value;
    let activityValue = activityNote.value;

    const newDiv = document.createElement('div');
    const newLi = document.createElement('li');
    const newH4 = document.createElement('h4');
    const noteSpan = document.createElement('span');
    const editSpan = document.createElement('span');
    const deleteSpan = document.createElement('span');
    const dateCreated = document.createElement('span');

    newDiv.classList.add("col", "align-self-center");
    newH4.setAttribute('id', 'topic')
    noteSpan.classList.add('note');
    editSpan.classList.add('edit');
    deleteSpan.classList.add('delete');
    dateCreated.classList.add('date-created');

    newH4.textContent = topicValue;
    noteSpan.textContent = activityValue;
    deleteSpan.textContent = 'delete';
    editSpan.textContent = 'edit';
    dateCreated.textContent = `date created: ${new Date().toLocaleString()}`;

    
    newLi.appendChild(newH4);
    newLi.appendChild(noteSpan);
    newLi.appendChild(editSpan);
    newLi.appendChild(deleteSpan);
    newLi.appendChild(dateCreated);
    newDiv.appendChild(newLi);
    notes.appendChild(newDiv);

    addForm.reset();
})


// making nav-menu actively
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
