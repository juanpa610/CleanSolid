interface Bird {
    eat(): void;
}

interface FlyingBird {
    fly(): void;
}

interface RuningBird {
    run(): void;
}

interface SwimmergBird {
    swing(): void;
}

class Tucan implements Bird, FlyingBird  {
    public fly() {}
    public eat() {}
}

class Hummingbird implements Bird, FlyingBird{
    public fly() {}
    public eat() {}
}

class Ostrich implements Bird, RuningBird {
    public eat() {}
    public run() {}
}

class Penguin implements Bird, SwimmergBird {
    public eat() {}
    public swing() {}
}

// De esta manera estamos segregando las interfaces para el bird de tal manera que 
// si en un futuro tuvieramos que hacen un cambio en la interface de FlyingBird
// Solo se veran afectadas las classes que implementan esta interface.