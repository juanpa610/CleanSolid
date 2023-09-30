(() => {

    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    function isRedFruit( fruit: string ): boolean {
        let nameFruits = ['manzana', 'cereza', 'ciruela' ];
        return nameFruits.includes(fruit);
    }

    type FruitColor = 'red' | 'yellow' | 'purple';
    function getFruitsByColor( color: FruitColor ): string[] {

        //Objeto literal 
        const fruitsByColor = {
            red: ['manzana','fresa'],
            yellow: ['piña','banana'],
            purple : ['moras', 'uvas'],
        }

        //1
        if(!Object.keys(fruitsByColor).includes(color)) throw Error('the color must be: red, yellow, purple');

        return fruitsByColor[color];
    
        //2
        if( fruitsByColor[color] ){
            return fruitsByColor[color];
        } else {
            throw Error('the color must be: red, yellow, purple');
        }

        //3
        switch (color) {
            case 'red':
                return ['manzana','fresa'];
            case 'yellow':
                return ['piña','banana'];
            case 'purple':
                return ['moras','uvas']
            default:
                throw Error('the color must be: red, yellow, purple');
        }

        //Culaquiera de estas esta bien ya es decir cual es mas lejible y mantenible 
    }

    // Simplificar esta función
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps() {
     return isFirstStepWorking ?  
                isSecondStepWorking ? 
                    isThirdStepWorking ?
                        isFourthStepWorking ? 'Working properly!'
                        : 'Fourth step broken.'
                    : 'Third step broken.'
                : 'Second step broken.'
            : 'First step broken.';

        // A mi parecer la forma a continuacion es mejor que la anterior, aunque las dos estan bien

        if (!isFirstStepWorking) return 'First step broken.';
        if (!isSecondStepWorking) return 'Second step broken.';
        if (!isThirdStepWorking) return 'Third step broken.';
        return isFourthStepWorking ? 'Working properly' : 'Fourth step broken.';
        
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados

})();
