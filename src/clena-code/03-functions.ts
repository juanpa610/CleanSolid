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

    // Continuacion: 

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        let result;
        if ( isDead ) {
            result = 1500;
        } else {
            if ( isSeparated ) {
                result = 2500;
            } else {
                if ( isRetired ) {
                    result = 3000;
                } else {
                    result = 4000; 
                }
            }
        }
        
        return result;
    }

    const getPayAmountV1 = ({ isDead = false, isSeparated = true, isRetired = false }):number => {
        if ( isDead ) return 1500;
        if ( isSeparated) return 2500;
        return  isRetired  ? 3000 : 400;
    }

    const getPayAmountV2 = ({ isDead = false, isSeparated = true, isRetired = false }):number => {
        if ( isDead ) return 1500;
        if ( isSeparated) return 2500;
        if ( isRetired ) return 300;
        return 400;
    }

    const getPayAmountV3 = ({ isDead = false, isSeparated = true, isRetired = false }):number => 
      isDead ? 1500 : isSeparated ? 2500 : isRetired ? 3000 : 4000;

})();




