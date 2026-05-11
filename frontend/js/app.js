const contenedor =
  document.getElementById(
    "contenedorTramites"
  );

const buscador =
  document.getElementById(
    "buscador"
  );

const spinner =
  document.getElementById(
    "spinner"
  );

const filtroCategoria =
  document.getElementById(
    "filtroCategoria"
  );

const filtroEntidad =
  document.getElementById(
    "filtroEntidad"
  );

const filtroModalidad =
  document.getElementById(
    "filtroModalidad"
  );

const filtroCosto =
  document.getElementById(
    "filtroCosto"
  );

const filtroRegion =
  document.getElementById(
    "filtroRegion"
  );

const filtroTipo =
  document.getElementById(
    "filtroTipo"
  );

const gratis =
  document.getElementById(
    "gratis"
  );


  
let tramitesGlobal = [];

async function cargarTramites(){

  spinner.style.display = "block";

  const respuesta =
    await fetch(
      `${API}/tramites`
    );

  const datos =
    await respuesta.json();

  tramitesGlobal = datos;

  mostrarTramites(datos);

  spinner.style.display = "none";

}

function mostrarTramites(tramites){

  contenedor.innerHTML = "";
  if(tramites.length === 0){
    contenedor.innerHTML = `
      <div class="alert alert-warning">
        No se encontraron resultados.
      </div>
    `;
    return;
  }
  tramites.forEach(tramite => {
    contenedor.innerHTML +=
      crearCard(tramite);
  });

}

function aplicarFiltros(){

  let resultados =
    [...tramitesGlobal];

  const texto =
    buscador.value.toLowerCase();

  if(texto){

    resultados =
      resultados.filter(t =>

        t.nombre
          .toLowerCase()
          .includes(texto)

        ||

        t.descripcion
          .toLowerCase()
          .includes(texto)

        ||

        t.entidad
          .toLowerCase()
          .includes(texto)

      );

  }

  if(filtroCategoria.value){

    resultados =
      resultados.filter(t =>

        t.categoria ===
        filtroCategoria.value

      );

  }

  if(filtroEntidad.value){

    resultados =
      resultados.filter(t =>

        t.entidad ===
        filtroEntidad.value

      );

  }

  if(filtroModalidad.value){

    resultados =
      resultados.filter(t =>

        t.modalidad ===
        filtroModalidad.value

      );

  }


 if(filtroRegion.value){

  resultados =
    resultados.filter(t =>

      t.region &&
      t.region.toLowerCase() ===
      filtroRegion.value.toLowerCase()

    );

}

  if(filtroTipo.value){

    resultados =
      resultados.filter(t =>

        t.tipo ===
        filtroTipo.value

      );

  }

  if(gratis.checked){

    resultados =
      resultados.filter(t =>

        t.costo === "Gratis"

      );

  }

  if(filtroCosto.value ===
    "economico"
  ){

    resultados =
      resultados.filter(t =>

        parseFloat(
          t.costo.replace(
            /[^0-9.]/g,
            ""
          )
        ) < 20

      );

  }

  if(filtroCosto.value ===
    "alto"
  ){

    resultados =
      resultados.filter(t =>

        parseFloat(
          t.costo.replace(
            /[^0-9.]/g,
            ""
          )
        ) >= 20

      );

  }

  mostrarTramites(resultados);

}

buscador.addEventListener(
  "keyup",
  aplicarFiltros
);

filtroCategoria.addEventListener(
  "change",
  aplicarFiltros
);

filtroEntidad.addEventListener(
  "change",
  aplicarFiltros
);

filtroModalidad.addEventListener(
  "change",
  aplicarFiltros
);

filtroCosto.addEventListener(
  "change",
  aplicarFiltros
);

filtroRegion.addEventListener(
  "change",
  aplicarFiltros
);

filtroTipo.addEventListener(
  "change",
  aplicarFiltros
);

gratis.addEventListener(
  "change",
  aplicarFiltros
);

cargarTramites();