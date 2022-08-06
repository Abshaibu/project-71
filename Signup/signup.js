const form = document.getElementById('form');
const incorrect = document.querySelector('.incorrect');
const incorrectText = document.querySelector('.incorrect-text');
form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    fetch('http://127.0.0.1:8000/api/users/register/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => {
        if (res.status === 201) {
            window.location.href = 'http://127.0.0.1:5500/dashboard.html'
        } else {
            incorrect.style.display = 'flex';
            incorrectText.innerHTML = 'Email already exists';

            setTimeout(() => {
                incorrect.style.display = 'none';
            }, 2500)
        }
        console.log(res);
        return res.json();
    }).then(data => {
        console.log(data)
        const authToken = data.tokens.refresh;
        localStorage.setItem('token', authToken);
    }).catch(error => console.log(error));
})

// const refreshToken = () => {
//     fetch('http://127.0.0.1:8000/api/token/refresh/', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     }).then(res => res.json())
//         .then(data => {
//             localStorage.setItem("auth-token", data.token);
//         })
//         .catch(error => console.log(error));
// }

// const watchStatusCode = (status) => {
//     if (status === 401 || status === 403) {
//         localStorage.removeItem("auth-token");
//         refreshToken();
//     }
// }
// // get user
// const getUser = () => {
//     const token = local.getItem("auth-token");

//     fetch('http://127.0.0.1:8000/api/token/refresh/', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer ' + token
//         },
//         body: JSON.stringify(data)
//     }).then(res => res.json())
//         .then(data => {
//             watchStatusCode(data.status)
//             console.log(data)
//         })
//         .catch(error => console.log(error));
// }