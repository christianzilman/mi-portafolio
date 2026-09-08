import multimedia360Cover from "./images/sistema360.png";

import expedientesCover from "./images/SistemaDeExpedientesSiGeDex-Menu-Principal.png";
import expedientesRegistro from "./images/SistemaDeExpedientesSiGeDex-RegistrarExpediente.png";
import expedientesBusqueda from "./images/SistemaDeExpedientesSiGeDex-BusquedaModificacionExpediente.png";
import expedientesLogin from "./images/SistemaDeExpedientesSiGeDex-Login.png";

import prestamosCover from "./images/SistemaPrestamos-Menu-Princiapal.png";
import prestamosClientes from "./images/SistemaPrestamos-Clientes.png";
import prestamosCreditos from "./images/SistemaPrestamos-Cargar-Creditos.png";
import prestamosRecibos from "./images/SistemaPrestamos-IngresoRecibos.png";
import prestamosLiquidacion from "./images/SistemaPrestamos-Liquidacion.png";
import prestamosIngresos from "./images/SistemaPrestamos-ConsultarIngresos.png";
import prestamosVerificacion from "./images/SistemaPrestamos-Verificacion-Recibo.png";
import prestamosControlCreditos from "./images/SistemaPrestamos-ControlCredito.png";
import prestamosControlVentas from "./images/SistemaPrestamos-Control-Venta.png";
import prestamosPagos from "./images/SistemaPrestamos-Consultar-Pagos-Parciales-e-Impagos.png";
import prestamosInforme from "./images/SistemaPrestamos-Informa-Mensual.png";
import prestamosAtrasos from "./images/SistemaPrestamos-Control-Atrasos.png";

import fotocabinaCover from "./images/SistemaFotoCabina-publicidad-1.jpg";
import fotocabinaPublicidad from "./images/SistemaFotoCabinapublicidad-2.jpg";
import fotocabinaMenu from "./images/SistemaFotoCabina-Menu-Principal.png";
import fotocabinaFotos from "./images/SistemaFotoCabina-FotosATomar.png";
import fotocabinaSeleccion from "./images/SistemaFotoCabina-PaginaDeSeleccion.png";
import fotocabinaArte from "./images/SistemaFotoCabina-PaginaDeSeleccionArte.png";
import fotocabinaMarco from "./images/SistemaFotoCabina-PaginaDeSeleccionMarco.png";

import saindexCover from "./images/Saindex-menu-principal-autor.png";
import saindexInicio from "./images/Saindex-inicio.png";
import saindexCargaObra from "./images/Saindex-menu-cargar-una-obra.png";
import saindexInformacionObra from "./images/Saindex-menu-carga-obra-informacion.png";
import saindexLogin from "./images/Saindex-login.png";

export { default as christianZilmanCv } from "./files/CV CHRISTIAN JULIO CESAR ZILMAN.pdf";

// Los nombres físicos se conservan para no romper referencias existentes.
// Estas colecciones dan a cada proyecto un nombre semántico y una portada clara.
export const multimedia360Images = {
  cover: multimedia360Cover,
  gallery: [],
} as const;

export const gestionExpedientesImages = {
  cover: expedientesCover,
  gallery: [expedientesRegistro, expedientesBusqueda, expedientesLogin],
} as const;

export const gestionFinancieraImages = {
  cover: prestamosCover,
  gallery: [
    prestamosClientes,
    prestamosCreditos,
    prestamosRecibos,
    prestamosLiquidacion,
    prestamosIngresos,
    prestamosVerificacion,
    prestamosControlCreditos,
    prestamosControlVentas,
    prestamosPagos,
    prestamosInforme,
    prestamosAtrasos,
  ],
} as const;

export const fotocabinaImages = {
  cover: fotocabinaCover,
  gallery: [
    fotocabinaPublicidad,
    fotocabinaMenu,
    fotocabinaFotos,
    fotocabinaSeleccion,
    fotocabinaArte,
    fotocabinaMarco,
  ],
} as const;

export const saindexImages = {
  cover: saindexCover,
  gallery: [
    saindexInicio,
    saindexCargaObra,
    saindexInformacionObra,
    saindexLogin,
  ],
} as const;
