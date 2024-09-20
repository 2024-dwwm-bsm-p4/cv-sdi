document.getElementById('darkMode').onclick = 
toggleDarkMode;
const body = document.body;

function toggleDarkMode() {
    body.classList.toggle('dark-mode');
}

document.getElementById('burger').onclick = 
toggleSideBar;
const burgerList = document.querySelector('.burger-list');

function toggleSideBar() {
    burgerList.classList.toggle("active");
}