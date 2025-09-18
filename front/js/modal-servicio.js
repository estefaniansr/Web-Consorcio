// JS para abrir modal
        function abrirModal(nombre, desc, url) {
            document.getElementById('modal-nombre').innerText = nombre;
            document.getElementById('modal-desc').innerText = desc;

            const modal = document.getElementById('modal-consorcio');
            modal.classList.add('activo');
        }

        // JS para cerrar modal
        function cerrarModal() {
            const modal = document.getElementById('modal-consorcio');
            modal.classList.remove('activo');
        }

        // Cerrar modal si clickeas fuera
        window.onclick = function (event) {
            const modal = document.getElementById('modal-consorcio');
            if (event.target === modal) cerrarModal();
        }