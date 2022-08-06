const form = document.getElementById('form');
const password = document.getElementById('password');
const incorrect = document.querySelector('.incorrect');
const errorText = document.querySelector('.error-text');
form.addEventListener('submit', e => {
    e.preventDefault();

    let data = {};
    let link = window.location.href;
    const linkToken = link.slice(39);
    console.log(linkToken);
    data = {
        password: password.value,
        token: linkToken
    };
    console.log(data);

    fetch('http://127.0.0.1:8000/api/password_reset/confirm/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(res => {
            if (res.status === 200) {
                window.location.href = 'http://127.0.0.1:5500/dashboard.html';
            } else {
                incorrect.style.display = 'flex';
                errorText.innerHTML = 'Password must be at least 8 characters long';

                setTimeout(() => {
                    incorrect.style.display = 'none';
                }, 2500)
            }
            console.log(res);
            return res.json()
        }).then(data => console.log(data))
        .catch(error => console.log(error));
})