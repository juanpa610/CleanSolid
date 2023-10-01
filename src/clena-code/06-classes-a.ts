(() => {

    // ! SRP : Single Responsibility Principle = Principio de responsabilidad unica
    // * en ingeniería de software establece que cada módulo o clase debe tener responsabilidad 
    // * sobre una sola parte de la funcionalidad proporcionada por el software y esta 
    // * responsabilidad debe estar encapsulada en su totalidad por la clase. Todos sus servicios 
    // * deben estar estrechamente alineados con esa responsabilidad.

    type Gender = 'F'|'M';
    class Person {

        // ! Forma larga 
        // public name: string;
        // public gender : Gender;
        // public age: number;
        // public birtDate : Date;

        // * constructor(name: string, gender: Gender, age: number, birtDate: Date) {
        //     this.name = name;
        //     this.gender = gender;
        //     this.age = age;
        //     this.birtDate = birtDate;
        // * }

        // ! Forma Corta 
        constructor(public name: string, public gender: Gender, public age: number, public birtDate: Date) { }
    }
    
    class User extends Person {
        private lastAccess : Date;

        constructor( 
            public email : string , 
            public role : string, 
            name : string,
            gender : Gender,
            age : number,
            birtDate : Date
        ){
            super(name, gender, age, birtDate);
            this.lastAccess = new Date();
        }

        checkCredential(){
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory : string,
            public lastOpenFolder : string,
            email : string,
            role : string,
            name : string,
            gender : Gender,
            age : number,
            birtDate : Date
        ){
            super( email, role ,name, gender, age, birtDate);
        }
    }

    // const newPerson = new Person('Juan Pablo Jaramilo Orrego', 'M', 19, new Date(2004, 1, 26));

    const newUser = new User('juan.jaramilo@pragma.com.co', 'user', 'Juan', 'F', 12, new Date(2004, 1, 26)  )
    
    const newUserSettings2 = new UserSettings('/user/home', '/home', 'juan.jaramilo@pragma.com.co', 'user', 'Juan', 'F', 12, new Date(2004, 1, 26) );
    console.log( {newUserSettings2}  );
   
})();