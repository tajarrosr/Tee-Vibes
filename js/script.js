// Sticky header navigation
window.addEventListener('scroll', function() {
    var scroll = window.pageYOffset;
    var header = document.querySelector('header');
    
    if (scroll > 200) {
        header.classList.add('background-header');
    } else {
        header.classList.remove('background-header');
    }
});


