const tramites = [

  {
    id: 1,
    nombre: "Renovación de DNI",
    entidad: "RENIEC",
    categoria: "Identidad",
    costo: "S/ 41.00",
    modalidad: "Online",
    region: "Lima",
    estado: "Disponible",
    tipo: "Registro",
    descripcion:
      "Permite renovar el Documento Nacional de Identidad.",
    url:
      "https://www.gob.pe/125-renovar-el-dni"
  },

  {
    id: 2,
    nombre: "Duplicado de DNI",
    entidad: "RENIEC",
    categoria: "Identidad",
    costo: "S/ 24.00",
    modalidad: "Online",
    region: "Cusco",
    estado: "Disponible",
    tipo: "Consulta",
    descripcion:
      "Solicita el duplicado de tu DNI por pérdida o robo.",
    url:
      "https://www.gob.pe/130-duplicado-de-dni"
  },

  {
    id: 3,
    nombre: "Emisión de Pasaporte",
    entidad: "Migraciones",
    categoria: "Viajes",
    costo: "S/ 98.60",
    modalidad: "Presencial",
    region: "Arequipa",
    estado: "Disponible",
    tipo: "Registro",
    descripcion:
      "Obtén tu pasaporte electrónico.",
    url:
      "https://www.gob.pe/pasaporte"
  },

  {
    id: 4,
    nombre: "Consulta RUC",
    entidad: "SUNAT",
    categoria: "Impuestos",
    costo: "Gratis",
    modalidad: "Online",
    region: "Lima",
    estado: "Disponible",
    tipo: "Consulta",
    descripcion:
      "Consulta información del RUC.",
    url:
      "https://e-consultaruc.sunat.gob.pe"
  },

  {
    id: 5,
    nombre: "Inscripción RUC",
    entidad: "SUNAT",
    categoria: "Impuestos",
    costo: "Gratis",
    modalidad: "Online",
    region: "Piura",
    estado: "Disponible",
    tipo: "Registro",
    descripcion:
      "Registra tu RUC como persona natural.",
    url:
      "https://www.gob.pe/inscribirse-en-el-ruc"
  },

  {
    id: 6,
    nombre: "Antecedentes Policiales",
    entidad: "PNP",
    categoria: "Seguridad",
    costo: "S/ 17.00",
    modalidad: "Online",
    region: "Cusco",
    estado: "Disponible",
    tipo: "Certificado",
    descripcion:
      "Consulta antecedentes policiales.",
    url:
      "https://www.gob.pe/antecedentes-policiales"
  },

  {
    id: 7,
    nombre: "Licencia de Conducir",
    entidad: "MTC",
    categoria: "Vehículos",
    costo: "S/ 24.50",
    modalidad: "Presencial y online",
    region: "Arequipa",
    estado: "Disponible",
    tipo: "Registro",
    descripcion:
      "Solicita o renueva licencia de conducir.",
    url:
      "https://www.gob.pe/licencia-de-conducir"
  },

  {
    id: 8,
    nombre: "Partida de Nacimiento",
    entidad: "RENIEC",
    categoria: "Registros",
    costo: "S/ 12.00",
    modalidad: "Online",
    region: "Lima",
    estado: "Disponible",
    tipo: "Certificado",
    descripcion:
      "Obtén copia certificada de nacimiento.",
    url:
      "https://www.gob.pe/partida-de-nacimiento"
  },

  {
    id: 9,
    nombre: "Mesa de Partes Virtual",
    entidad: "PCM",
    categoria: "Documentos",
    costo: "Gratis",
    modalidad: "Online",
    region: "Piura",
    estado: "Disponible",
    tipo: "Solicitud",
    descripcion:
      "Envía documentos digitales a entidades públicas.",
    url:
      "https://facilita.gob.pe"
  },

  {
    id: 10,
    nombre: "Pago de Tasas",
    entidad: "Banco de la Nación",
    categoria: "Pagos",
    costo: "Variable",
    modalidad: "Online",
    region: "Lima",
    estado: "Disponible",
    tipo: "Pago",
    descripcion:
      "Realiza pagos de trámites del Estado.",
    url:
      "https://pagalo.pe"
  },

  {
    id: 11,
    nombre: "Certificado de Estudios",
    entidad: "MINEDU",
    categoria: "Educación",
    costo: "Gratis",
    modalidad: "Online",
    region: "Arequipa",
    estado: "Disponible",
    tipo: "Certificado",
    descripcion:
      "Consulta certificados de estudios.",
    url:
      "https://certificado.minedu.gob.pe"
  },

  {
    id: 12,
    nombre: "Consulta SIS",
    entidad: "MINSA",
    categoria: "Salud",
    costo: "Gratis",
    modalidad: "Online",
    region: "Cusco",
    estado: "Disponible",
    tipo: "Consulta",
    descripcion:
      "Consulta afiliación al SIS.",
    url:
      "https://www.gob.pe/sis"
  },

  {
    id: 13,
    nombre: "Vacunación COVID-19",
    entidad: "MINSA",
    categoria: "Salud",
    costo: "Gratis",
    modalidad: "Presencial",
    region: "Piura",
    estado: "Disponible",
    tipo: "Registro",
    descripcion:
      "Consulta centros de vacunación COVID-19.",
    url:
      "https://www.gob.pe/minsa"
  },

  {
    id: 14,
    nombre: "Consulta de Multas",
    entidad: "SAT",
    categoria: "Vehículos",
    costo: "Gratis",
    modalidad: "Online",
    region: "Lima",
    estado: "Disponible",
    tipo: "Consulta",
    descripcion:
      "Consulta multas vehiculares.",
    url:
      "https://www.sat.gob.pe"
  },

  {
    id: 15,
    nombre: "Reserva de Citas Médicas",
    entidad: "MINSA",
    categoria: "Salud",
    costo: "Gratis",
    modalidad: "Online",
    region: "Arequipa",
    estado: "Disponible",
    tipo: "Solicitud",
    descripcion:
      "Reserva citas médicas virtuales.",
    url:
      "https://www.gob.pe/minsa"
  },

  {
    id: 16,
    nombre: "Denuncia Policial",
    entidad: "PNP",
    categoria: "Seguridad",
    costo: "Gratis",
    modalidad: "Presencial",
    region: "Cusco",
    estado: "Disponible",
    tipo: "Denuncia",
    descripcion:
      "Presenta denuncias policiales.",
    url:
      "https://www.gob.pe/pnp"
  },

  {
    id: 17,
    nombre: "Pago de Impuestos Municipales",
    entidad: "Municipalidad",
    categoria: "Impuestos",
    costo: "Variable",
    modalidad: "Presencial y online",
    region: "Piura",
    estado: "Disponible",
    tipo: "Pago",
    descripcion:
      "Realiza pagos de arbitrios e impuestos.",
    url:
      "https://www.gob.pe"
  },

  {
    id: 18,
    nombre: "Certificado Único Laboral",
    entidad: "MTPE",
    categoria: "Trabajo",
    costo: "Gratis",
    modalidad: "Online",
    region: "Lima",
    estado: "Disponible",
    tipo: "Certificado",
    descripcion:
      "Obtén el Certificado Único Laboral.",
    url:
      "https://www.gob.pe/certijoven"
  },

  {
    id: 19,
    nombre: "Inscripción Universitaria",
    entidad: "SUNEDU",
    categoria: "Educación",
    costo: "S/ 50.00",
    modalidad: "Presencial",
    region: "Arequipa",
    estado: "Disponible",
    tipo: "Registro",
    descripcion:
      "Registro de grados y títulos.",
    url:
      "https://www.sunedu.gob.pe"
  }

];

module.exports = tramites;