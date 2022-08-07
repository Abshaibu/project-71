const expander = document.querySelector('.sidebar-expander');
const sidebar = document.querySelector('.sidebar');
const aside = document.querySelector('aside');
const openModal = document.querySelector('.modal-wrapper');
const modalOne = document.querySelector('.modal1');
const modalTwo = document.querySelector('.modal2');
const toggler = document.querySelectorAll('.toggler');
const modalOnes = document.querySelectorAll('.modal1-btn');
const modalTwos = document.querySelectorAll('.modal2-btn');
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

// New Terms Modal
modalOnes.forEach(modal => {
    modal.addEventListener('click', (e) => {
        modalOne.classList.toggle('modal');
        body.classList.toggle('no-scroll');
        openModal.classList.remove('changes');
        modalTwo.classList.remove('changes');
    })
})

// New Policy Modal
modalTwos.forEach(modal2 => {
    modal2.addEventListener('click', (e) => {
        modalTwo.classList.toggle('modal');
        body.classList.toggle('no-scroll');
        openModal.classList.remove('changes');
    })
})

// Business Conditions Details Form
const bizDetails = document.querySelector(".conditions-details");
const consDetails = {};
bizDetails.addEventListener('submit', (e) => {
    e.preventDefault();

    consDetails.name = document.querySelector('#bizname').value;
    consDetails.phone = document.querySelector('#phone').value;
    consDetails.email = document.querySelector('#email').value;
    consDetails.website = document.querySelector('#url').value;
    consDetails.reserved = document.querySelector('#reserved').value;
    consDetails.cookies = document.querySelector('#cookies').value;
    consDetails.copyright = document.querySelector('#copyright').value;
    consDetails.tempname = document.querySelector('#tempname').value;
    modalOne.classList.add('add-progress');
    body.classList.toggle('no-scroll');
    document.querySelector('.heading').innerHTML = 'Preview';
    // document.querySelector('.dashboard').innerHTML = 'Preview';

    setTimeout(() => {
        modalOne.classList.toggle('modal');
        modalOne.classList.remove('changes');
        modalOne.classList.remove('add-progress');
        modalTwo.classList.remove('changes');
        bizDetails.reset();
    },700);


    console.log(consDetails);
})

// Business Privacy Details Form
const priDetails = document.querySelector(".privacy-details");
const privacyDetails = {};
priDetails.addEventListener('submit', (e) => {
    e.preventDefault();

    privacyDetails.name = document.querySelector('#mbizname').value;
    privacyDetails.phone = document.querySelector('#mphone').value;
    privacyDetails.email = document.querySelector('#memail').value;
    privacyDetails.website = document.querySelector('#murl').value;
    privacyDetails.reserved = document.querySelector('#mreserved').value;
    privacyDetails.cookies = document.querySelector('#mcookies').value;
    privacyDetails.copyright = document.querySelector('#mcopyright').value;
    privacyDetails.tempname = document.querySelector('#mtempname').value;
    modalTwo.classList.add('add-progress');
    body.classList.toggle('no-scroll');
    document.querySelector('.heading').innerHTML = 'Preview';
    // document.querySelector('.dashboard').innerHTML = 'Preview';

    setTimeout(() => {
        modalTwo.classList.toggle('modal');
        modalTwo.classList.remove('changes');
        modalTwo.classList.remove('add-progress');
        priDetails.reset();
    }, 700);


    console.log(privacyDetails);
})

// Switching Form Content
const switchForms = document.querySelectorAll('.switch-form');
switchForms.forEach(swap => {
    swap.addEventListener('click', () => {
        openModal.classList.toggle('changes');
        openModal.classList.remove('add-progress');
        modalTwo.classList.toggle('changes');
        modalTwo.classList.remove('add-progress');
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