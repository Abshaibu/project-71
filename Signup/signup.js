const form = document.getElementById('form');
form.addEventListener('submit', e => { 
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(data);

    fetch('http://127.0.0.1:8000/api/users/register/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
})
// const firstName = document.getElementById('firstname').value;
// const lastName = document.getElementById('lastname').value;
// const email = document.getElementById('email').value;
// const password = document.getElementById('password').value;
// const terms = document.getElementById('terms');
// const eyeIcon = document.querySelector('.eye-icon');
// const errorMessage = document.querySelector('.error-message');


// form.addEventListener('submit', handleSubmit);
// function handleSubmit(e) {
//     e.preventDefault();
//     // check form Validity
//     if (firstName === '') {
//         errorMessage.style.display = 'flex';
//     }
// };

// // hide error message after input meets criteria
// document.querySelectorAll('hide-error').forEach(errMsg => { 
//     errMsg.addEventListener('change', () => {
//         console.log('changed');
//         if (errMsg.value !== '') {
//             errorMessage.style.display = 'none';
//         }
//     })
// })


// // change the input type to [text] when the eye icon is clicked
// eyeIcon.addEventListener('click', () => {
//     if (eyeIcon.src != '../Reset/eye.svg') {
//         eyeIcon.src = '../Reset/eye.svg';
//     } else if (eyeIcon.src == '../Reset/eye.svg') {
//         console.log(eyeIcon.src);
//         eyeIcon.src = '../Reset/eye-off.svg';
//     }
// });