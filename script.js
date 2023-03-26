//Light mode and dark mode 
let html = document.getElementById('html');
let change_btn = document.getElementById('change_btn');
let change_image = document.getElementById('change_image');

change_btn.addEventListener('click', function(){
    html.classList.toggle('dark');
    change_image.classList.toggle('dark');
});
