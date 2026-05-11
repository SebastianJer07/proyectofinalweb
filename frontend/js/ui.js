function crearCard(tramite){
  return `
    <article class="tramite-card">
      <div class="card-header-custom">
        <h5>${tramite.nombre}</h5>
      </div>
      <div class="card-body-custom">
        <span class="badge-custom">${tramite.categoria}</span>
        <p class="mt-3">${tramite.descripcion}</p><p>
          <strong>Entidad:</strong>${tramite.entidad}</p>
        <p><strong>Costo:</strong>${tramite.costo}</p>
        <p><strong>Modalidad:</strong>${tramite.modalidad}</p>
        <p><strong>Región:</strong>${tramite.region}</p>
        <a href="${tramite.url}"target="_blank"class="btn btn-danger w-100 mt-3">
          Ver instrucciones</a>
      </div>
    </article>`;
}