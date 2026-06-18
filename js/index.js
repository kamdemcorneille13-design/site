// uniquement la resposiviter
var menu = document.querySelector('.menu');
var toggle_menu = document.querySelector('.toggle-menu');
toggle_menu.onclick = function(){
    toggle_menu.classList.toggle('active');
    menu.classList.toggle('responsive')
}

// bouton des reseaux pour aller vers d'autre site
function facebook(){
    window.location.href='https://www.facebook.com'
}
function instagram(){
    window.location.href='https://www.instagram.com'
}
function twitter(){
    window.location.href='https://www.twitter.com'
}
