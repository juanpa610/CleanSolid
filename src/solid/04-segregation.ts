interface Bird {
    fly(): void;
    eat(): void;
    run(): void;
    swing(): void;
}

class Tucan implements Bird {
    public fly() {}
    public eat() {}
    public run() {}
    public swing() {
        throw new Error("This bird not swing");
    }
}


class Hummingbird implements Bird {
    public fly() {}
    public eat() {}
    public run() {}
    public swing() {
        throw new Error("This bird not swing");
    }
}

class Ostrich implements Bird {
    public fly(){
        throw new Error('This bird not fly');
    }
    public eat() {}
    public run() {}
    public swing() {
        throw new Error("This bird not swing");
    }
}

class Penguin implements Bird {
    public fly(){
        throw new Error('This bird not fly');
    }
    public eat() {}
    public run() {}
    public swing() {}
}