// import axios from 'axios';

export class HttpClient {
    // async get(url: string){
    //     const { data, status } = await axios.get(`${url}`);
    //     console.log( { data, status } );
    //     return { data, status };
    // }

    async get(url: string){
        const res = await fetch(`${url}`, { headers: {  method: 'GET', }} );
        const data = await res.json();
        return {data , status : res.status};
    }
}


(() => {
    //* Y asi es como se aplica el principio de Open and closed:
    //* Lo que se se hizo fue aplicar el patron adaptador y principio de open and close para que 
    //* no tengamos que estar modificando las classes que estan usando esta class HttpClient
    //* pudimos logar el dejar de usar axios y usar fectch para hacer las peticiones; a esto es 
    //* a lo que se refiere el principio de open and close nuestro codigo tiene que estar abierto a la extencion 
    //* pero cerrado a la modificación.

    // y como es que esto logra funcionar, solo es crear el metodo que queremos usar para la peticion
    // en este caso  el get y llamarlo donde lo necesitemos; de esta manera cuando se hace un cambio donde se llama 
    // HttpClient solo se va a ver afectada una pequeña parte de la aplicacion, no todos los modulos o todos los componentes
})();