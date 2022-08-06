const expander = document.querySelector('.sidebar-expander');
const sidebar = document.querySelector('.sidebar');
const aside = document.querySelector('aside');
const openModal = document.querySelector('.modal-wrapper');
const toggler = document.querySelectorAll('.toggler');
const newDocModal = document.querySelectorAll('.new-doc');
const body = document.querySelector('body');


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

// New Document Modal
newDocModal.forEach(newDoc => {
    newDoc.addEventListener('click', () => {
        openModal.classList.toggle('modal');
        body.classList.toggle('no-scroll');
    })
})

// Business Details Form
const bizDetails = document.querySelector(".business-details");
const companyDetails = {};
bizDetails.addEventListener('submit', (e) => {
    e.preventDefault();
    // e.stopPropagation()

    companyDetails.name = document.querySelector('#bizname').value;
    companyDetails.phone = document.querySelector('#phone').value;
    companyDetails.email = document.querySelector('#email').value;
    companyDetails.website = document.querySelector('#url').value;
    console.log(companyDetails);
    openModal.classList.add('changes')
    bizDetails.classList.add('terms-features');
    bizDetails.classList.remove('business-details');
})

// Terms Features
const details = document.querySelector(".details");
const features = {};
details.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(details);
    const data = Object.fromEntries(formData);
    console.log(data);

    openModal.classList.add('add-progress');
    console.log(features);
    // openModal.classList.remove('changes')
    // openModal.classList.toggle('modal');
    // body.classList.toggle('no-scroll');

    // close and show preview page
})

// Back to Business Details
const backBtn = document.querySelector('.back');
backBtn.addEventListener('click', (e) => {
    console.log(e.target); 
    openModal.classList.remove('changes');
    openModal.classList.remove('add-progress');
    bizDetails.classList.remove('terms-features');
    bizDetails.classList.add('business-details');
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