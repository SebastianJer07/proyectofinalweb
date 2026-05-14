function validarTramite(data) {
    console.log("Iniciando validación de datos...", data);
    if (!data.nombre || data.nombre.length < 3) {
        alert("El nombre del trámite es muy corto");
        return false;
    }

    if (!data.descripcion) {
        alert("La descripción es obligatoria");
        return false;
    }

    // Si todo está bien
    console.log("Validación exitosa");
    return true;
}