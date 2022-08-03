const form = document.getElementById('form');
form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(data);

    fetch('http://127.0.0.1:8000/api/users/').then(res => {
        return res.json();
    })
        .then(data => console.table(data))
        .catch(error => console.log(error));
})