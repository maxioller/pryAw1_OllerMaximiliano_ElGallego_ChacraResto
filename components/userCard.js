export const userCard = (arr) => {
    return `
    <div class="card user-card">
        <div class="card-body user-card-body">
            <h2 class="user-title">Mi Perfil</h2>

            <p class="user-field"><strong>Email:</strong> ${arr.email}</p>
            <p class="user-field"><strong>Nombre:</strong> ${arr.name}</p>
            <p class="user-field"><strong>Apellido:</strong> ${arr.lastName}</p>

            <button id="boton-logout" class="btn button_grande user-logout">Cerrar sesión</button>
        </div>   
    </div>
    `
}