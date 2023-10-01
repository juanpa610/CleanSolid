// Principio DRY: Dont`t repeat yourself 

// SE BASA EN POCAS PALABRAS EN TRATAR DE NO REPETIR CODIGO 

type size = ''|'S'|'M'|'k';

class Product {
    constructor(
        public name : string = '',
        public price : number = 0,
        public size : size = '',
    ){}

    private isProductReady():boolean{
        for (const key in this) {
            switch(typeof this[key]){
                case 'string':
                    if( (<string>this[key]).trim().length <= 0 )  throw new Error(`${key} is empty`);
                    break;
                case 'number':
                    if( (<number>this[key]) <= 0 )  throw new Error(`${key} is zero`);
                    break;
                default : 
                   throw new Error(`${typeof this[key]} is not valid`)
            }
        }

        return true;
    }

    toString(){
        if(!this.isProductReady()) return;
        return `${this.name} (${this.price}), ${this.size}`
    }
}

(()=>{
    const bluePants  = new Product('Juan', 10,'S');
    console.log( bluePants.toString());

})();