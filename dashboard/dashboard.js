const expander = document.querySelector('.sidebar-expander');
const sidebar = document.querySelector('.sidebar');
const aside = document.querySelector('aside');
const toggler = document.querySelectorAll('.toggler');


// Sidebar Toggler
expander.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-collapsed');
    aside.classList.toggle('sidebar-collapsed');
})

// Navbar Toggler
toggler.forEach(toggle => { 
    toggle.addEventListener('click', () => {
        aside.classList.toggle('navbar-toggler');
    })
})

// Tabs Switcher
$(document).ready(function () {
    $('.tab-a').click(function () {
        $(".tab").removeClass('tab-active');
        $(".tab[data-id='" + $(this).attr('data-id') + "']").addClass("tab-active");
        $(".tab-a").removeClass('active-a');
        $(this).parent().find(".tab-a").addClass('active-a');
    });
});