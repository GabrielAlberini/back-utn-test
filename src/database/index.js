import { fileURLToPath } from "url";
import { dirname } from "path";

// Obtener la ruta del archivo actual (el módulo actual)
const currentFileUrl = import.meta.url;

// Convertir la URL del archivo a la ruta del sistema de archivos
const currentFilePath = fileURLToPath(currentFileUrl);

// Obtener el directorio del archivo actual
const pathfile = dirname(currentFilePath);

export { pathfile };
