(() => {

    // ! Ahora si se va a aplicar el principio de responsabilidad unica
    // * Priorizar la composición frente a la herencia! :tratar de evitar los extends 

    type Gender = 'F'|'M';

    interface PersonProperties {
        age:      number; 
        birthDate: Date;
        gender:   Gender; 
        name:     string; 
    }

    class Person {
        public name: string;
        public gender: Gender;
        public age: number;
        public birthDate: Date;

        constructor({name, gender, age, birthDate}: PersonProperties) {
            this.name     = name;
            this.gender   = gender;
            this.age      = age;
            this.birthDate = birthDate;
        }
    }

    interface UserProperties {
        email     : string;
        role      : string;
    }

    class User {
        public email      : string;
        public role       : string;
        public lastAccess : Date;

        constructor( 
            { 
                email, 
                role, 
            } : UserProperties
        ){
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredential(){
            return true;
        }
    }

    interface SettingsProperties{
        lastOpenFolder : string;
        workingDirectory : string;
    }

    class Settings {
        public lastOpenFolder : string;
        public workingDirectory : string;

        constructor({ 
            lastOpenFolder,
            workingDirectory,
        }: SettingsProperties){
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    interface UserSettingsProperties{
        age : number;
        birthDate : Date;
        email : string;
        gender : Gender;
        lastOpenFolder : string;
        name : string;
        role : string;
        workingDirectory : string;
    }

    class UserSettings  {
        public person : Person;
        public user : User;
        public settings : Settings;

        constructor({
            name, age, gender, birthDate,
            email, role,
            lastOpenFolder, workingDirectory

        }: UserSettingsProperties){
            this.person = new Person({name, age, gender, birthDate});
            this.user = new User({email, role});
            this.settings = new Settings({ workingDirectory, lastOpenFolder});
        }
    }
 
    const newUserSettings2 = new UserSettings({
        age: 12,
        birthDate:new Date(2004, 1, 26),
        email: 'jaramillo@pragma.com',
        gender: 'M',
        lastOpenFolder: '/home',
        name: 'Juan pablo',
        role: 'User',
        workingDirectory: '/user/home',
    });

    console.log( newUserSettings2.user.checkCredential() );
   
})();