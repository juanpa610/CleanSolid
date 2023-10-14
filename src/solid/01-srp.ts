// Single responsibility principle (SRP):

(() => {

    interface Product { 
        id:   number;
        name: string;
    }
    

    class ProductService {

        getProduct(id: number){
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }

        saveProduct( product: Product ) {
            console.log('Guardando en base de datos', product );
        }

    }

    class Mailer {

        private fromEmail: string = 'from.email@gmail.com';
        
        sendEmail(emailList: string[], template: 'to-clients' | 'to-aminds'){
            console.log('Enviando correo a los clientes', emailList, template);
        }

    }

    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        private productService: ProductService;
        private mailer: Mailer;

        constructor(  productService : ProductService, mailer : Mailer  ){
            this.productService =  productService;
            this.mailer =  mailer;
        }
    
        loadProduct( id: number ) {
            this.productService.getProduct(id);
        }
    
        saveProduct( product: Product ) {
            this.productService.saveProduct( product );
        }
    
        notifyClients() {
           this.mailer.sendEmail( ['juan.jaramillo@pragma.com.co'], 'to-clients');
        }
    
    }

    class CartBloc {

        private intemsInCart : Object[] = [];

        addToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    
    }
    
    const productService = new ProductService();
    const mailer = new Mailer();

    const productBloc = new ProductBloc(productService, mailer);
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.addToCart(10);


    // !Nuestros modulos y classes tienen que hacer una tarea y la tienen que hacer bien.
    // * Una classe puede tener diferentes metodos pero siempre y cuando esten relacionados
    // * con la classe o con el nombre de la classe 


})();

(() => {
    // ? SRP - Detectar las violaciones al principio 

    // * Nombres de classes y módulos demasiado genéricos:
    //! cuando esto pasa hace que el módulo o clase tenga muchas responsabilidades, y no nos hace pensar en el 
    //! "Esto no deberia estar aqui "
    //! "Esa propiedad no deberia existir aqui "
    
    
    // * Cambios en el código suelen afectar la clase o módulo: 
    //! Cuando hacemos muchos cambios para que ese módulo o classes se pueda adaptar correctamente 
    //! a lo que estemos haciendo significa que nuestra implementacion no esta correcta.

    // * La clase involucra múltiples capas: 
    //! Cuando estamos haciendo muchas interacciones en diferentes capas de nuestra aplicacion
    //! eso significaria que esa clase tien demasiadas responsabilidades tambien. 

    // * Número elavado de impotaciones : 
    //! Esto se evidencia cuando al inicio del archivo tienen hasta mas de 15 o 15 importaciones 
    //! Cuando pasa esto es por que estamos importando muchos modulos o componetes que son necesarios 
    //! para ese archivo, pero cuando hablamos de clases o móduos  abstractos que eben de hacer una tarea especifica 
    //! o hacer tareas que estan relacionadas  con el nombre del mismo documento o la misma clase no deberian
    //! de tener tantas importaciones.
})