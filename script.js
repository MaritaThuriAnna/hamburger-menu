// pe mobil
document.getElementById('menuIcon').addEventListener('click', function() {
    var nav = document.getElementById('navMenu');
    nav.classList.toggle('show');
});

// toate elementele de meniu care au submeniuri
const menuItems = document.querySelectorAll('.menu li a');

// event listener pentru click
menuItems.forEach(item => {
    item.addEventListener('click', function(e) {
        const submenu = this.nextElementSibling;

        if (submenu && submenu.classList.contains('submenu')) {
            e.preventDefault();
            submenu.classList.toggle('open');
        }
    });
});
