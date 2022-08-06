const form = document.getElementById('form');
const incorrect = document.querySelector('.incorrect');
const incorrectText = document.querySelector('.incorrect-text');
form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    fetch('http://127.0.0.1:8000/api/token/', {
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
            incorrectText.innerHTML = 'Incorrect email or password';

            setTimeout(() => {
                incorrect.style.display = 'none';
            }, 2500)
        }
        console.log(res);
        console.log(res.status);
        return res.json()
    }).then(data => {
        console.log(data)
        const refreshToken = data.refresh;
        localStorage.setItem('refresh', refreshToken);
    })
        .catch(error => console.log(error));
})