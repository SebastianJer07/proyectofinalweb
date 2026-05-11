let token = localStorage.getItem('token');

// Al cargar la página, verificar si ya hay un token
window.onload = () => {
    if(token) mostrarPanel();
};

async function login() {
    const usuario = document.getElementById('user').value;
    const password = document.getElementById('pass').value;

    const res = await fetch('http://localhost:3000/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuario, password })
    });

    const data = await res.json();

    if(res.ok) {
        token = data.token;
        localStorage.setItem('token', token);
        mostrarPanel();
    } else {
        alert(data.mensaje);
    }
}

function mostrarPanel() {
    document.getElementById('loginSection').classList.add('d-none');
    document.getElementById('adminPanel').classList.remove('d-none');
}

function logout() {
    localStorage.removeItem('token');
    location.reload();
}

// Enviar el nuevo trámite al servidor
document.getElementById('formTramite').addEventListener('submit', async (e) => {
    e.preventDefault();

    const nuevoTramite = {
        nombre: document.getElementById('nombre').value,
        entidad: document.getElementById('entidad').value,
        descripcion: document.getElementById('descripcion').value,
        costo: Number(document.getElementById('costo').value),
        modalidad: document.getElementById('modalidad').value,
        
        // ESTO ES LO QUE EL CONTROLADOR PIDE Y NO ESTABAS ENVIANDO:
        categoria: "General", // <--- Obligatorio según tu if(...)
        url: "#",             // <--- Añadelo por si acaso
        region: document.getElementById('region').value
    };

    console.log("Enviando a backend:", nuevoTramite); // Revisa que categoria aparezca aquí

    const res = await fetch('http://localhost:3000/api/admin/tramites', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
           // 'Authorization': `Bearer ${token}` 
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(nuevoTramite)
    });

    if(res.ok) {
        alert("¡Trámite agregado con éxito!");
        location.href = "index.html"; // Redirige para ver el cambio
    } else {
        const errorData = await res.json();
        alert("Error: " + errorData.mensaje);
    }
});