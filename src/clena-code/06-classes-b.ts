(() => {

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
        age:      number; 
        birthDate: Date;
        email : string;
        gender:   Gender;
        name:     string; 
        role : string;
    }

    class User extends Person {
        public email : string;
        public role : string;
        public lastAccess : Date;

        constructor( 
            {  
                age,
                birthDate,
                email, 
                gender,
                name,
                role, 
            } : UserProperties
        ){
            super({name, gender, age,  birthDate});
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredential(){
            return true;
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

    class UserSettings extends User {
        public workingDirectory : string;
        public lastOpenFolder : string;

        constructor({ 
            age,
            birthDate,
            email,
            gender,
            lastOpenFolder,
            name,
            role,
            workingDirectory,
        }: UserSettingsProperties){
            super( {age, birthDate, email, gender, name, role} );
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
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

    console.log( {newUserSettings2}  );
   
})();