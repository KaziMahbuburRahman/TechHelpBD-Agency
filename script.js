// Check if there is a theme preference stored in localStorage
if (localStorage.getItem('theme') === 'dark') {
    html.classList.remove('dark');
    change_image.src = 'img/moon.svg';
} else {
    html.classList.add('dark');
    change_image.src = 'img/sun.svg';

}

// Update localStorage with the current theme preference
change_btn.addEventListener('click', function () {
    html.classList.toggle('dark');
    change_image.classList.toggle('dark');

    if (change_image.src.includes('img/moon.svg')) {
        change_image.src = 'img/sun.svg';
        localStorage.setItem('theme', 'dark');
    } else {
        change_image.src = 'img/moon.svg';
        localStorage.setItem('theme', 'light');
    }
});