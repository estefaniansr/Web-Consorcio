function pedirWhatsApp(nombre) {
    const mensaje = `Hola! me comunico para...`;
    const numero = "Num";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
}
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
    if (localStorage.getItem('modo') === 'dark') {
        document.body.classList.add('dark-mode');
    }
})

document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
});