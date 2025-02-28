document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        this.textContent = 'Light Mode';
    } else {
        this.textContent = 'Dark Mode';
    }
});

document.querySelector('.nav-toggle').addEventListener('click', () => {
    const navList = document.querySelector('.nav-right ul');
    navList.style.display = navList.style.display === 'block' ? 'none' : 'block';
});