
// JS para abrir modal
function abrirModal(nombre) {
    document.getElementById('modal-nombre').innerText = nombre;

    const modal = document.getElementById('modal-servicios');
    modal.classList.add('activo');
}
// JS para cerrar modal
function cerrarModal() {
    const modal = document.getElementById('modal-servicios');
    modal.classList.remove('activo');
}

// Cerrar modal si clickeas fuera
window.onclick = function (event) {
    const modal = document.getElementById('modal-servicios');
    if (event.target === modal) cerrarModal();
}