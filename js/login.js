window.addEventListener('load', () => {

    const form = document.getElementById('login');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const userEmail = document.getElementById('email').value;
        const userPass  = document.getElementById('password').value;

        fetch('../data/users.json')
            .then(res => res.json())
            .then(users => {
                const user = users.find(u => u.email === userEmail && u.pass === userPass);

                if (user) {
                    // Guardar en sessionStorage
                    sessionStorage.setItem('userData', JSON.stringify(user));
                    console.log(user);
                    window.location.href = '../index.html';
                } else {
                    document.getElementById('lblError').textContent =
                        "Usuario o contraseña incorrecto, --> Datos de prueba: USER: prueba@gmail.com - PASS: 123prueba";
                }
            })
            .catch(error => {
                console.error(error);
                document.getElementById('lblError').textContent =
                    "Ocurrió un error, intenta nuevamente";
            });
    });
})