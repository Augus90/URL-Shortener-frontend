import { useEffect, useState } from "react";

/**
 * Ejecuta a una funcion al cargar la pagina y debuelve el resultado al obtener la información. Puede aceptar paramietros para la funcion de entrada
 * y una valor por el cual dependa la funcion
 * @param {function} callback Funcion que queremos que se ejecute al cargar la pagina
 * @param {string | null} [parameters] Cadena adicional que, si exite, se agrega como parametro a la funcion callback
 * @param {* | null} [dependenci] Variable opcional por el cual podemos hacer depender a la funcion callback si cambia su valor
 * @returns {*} Retorna el valor obtenido mas el estado de loading y si hubo un error, tambien retorna el error
 */
export default function useFetch(callback, parameters = "", dependenci = null) {
  /**
   * El valor Obtenido al llamar a la API
   * @type {object}
   */
  const [data, setData] = useState([]);
  /**
   * Encargada de informar errores en de ejecucion
   * @type {error}
   */
  const [error, setError] = useState(null);
  /**
   * Estado que es verdadero solo cuando de esta haciendo la llamada de la API
   * @type {boolean}
   */
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await callback(parameters);
        setData(response);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [dependenci]);

  //   console.log(data);

  return { data, error, loading };
}
