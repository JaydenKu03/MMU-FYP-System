const announcementTab = document.getElementById('announcementTab');
const eventTab = document.getElementById('eventTab');
const announcementForm = document.getElementById('announcementForm');
const eventForm = document.getElementById('eventForm');

announcementTab.addEventListener('click', () => {
    announcementTab.classList.add('active');
    eventTab.classList.remove('active');
    announcementForm.classList.add('active');
    eventForm.classList.remove('active');
});

eventTab.addEventListener('click', () => {
    eventTab.classList.add('active');
    announcementTab.classList.remove('active');
    eventForm.classList.add('active');
    announcementForm.classList.remove('active');
});