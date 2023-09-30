(() => {

    function getInfoMovieById( id: string ) {
        console.log({ id });
    }

    function getInfoMovieActorsById( id: string ) {
        console.log({ id });
    }

    function getBiographyActorById ( id: string ) {
        console.log({ id });
    }
    
    interface Movie {
        cast:        string[];
        description: string;
        rating:      number;
        title:       string;
    }

    function createMovie( {title, description, rating, cast} : Movie ) {
        console.log( {title, description, rating, cast} );
    }

    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor', birthdate);
        return true;        

    }

   

})();




