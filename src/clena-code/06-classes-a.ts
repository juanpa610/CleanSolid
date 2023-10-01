(() => {

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

    const newPerson = new Person('Juan Pablo Jaramilo Orrego', 'M', 19, new Date(2004, 1, 26));
    console.log( newPerson );
   
})();