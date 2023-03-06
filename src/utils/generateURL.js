import { configs } from "./configs";

export function generateURL(url, id, config) {

    // Obtener configuracion completa en base a la configuración que se pase como parámetro
    const getFullConfig = configs[config] || configs['valorant_kills'] ;

    // Incrustar el id en la configuración
    const newConfig = replaceId(getFullConfig, id);

    // Obtener la parte de la URL después de "/upload/"
    const parteDespuesDeUpload = url.match(/\/upload\/(.+)/)[1];

    // Concatenar la configuración y el id con la parte de la URL después de "/upload/"
    const nuevaParteDespuesDeUpload = `${newConfig}/${parteDespuesDeUpload}`;

    // Retornar la nueva URL con la nueva parte después de "/upload/"
    return url.replace(parteDespuesDeUpload, nuevaParteDespuesDeUpload);
}

function replaceId(config, id) {
    return config.replace(/_id_/g, id);
}