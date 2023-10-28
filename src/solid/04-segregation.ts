interface Bird {
    eat(): void;
}

interface FlyingBird {
    fly(): number;
}

interface RuningBird {
    run(): void;
}

interface SwimmergBird {
    swing(): void;
}

class Tucan implements Bird, FlyingBird  {
    public fly() { return 100}
    public eat() {}
}

class Hummingbird implements Bird, FlyingBird{
    public fly() { return 20}
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

// Y asi es como se ve el Principio de segregacion de interface dando resultados buenos, en este ejemplo
// se pudo evidenciar que no tuvimos que modificar las otras classes implementan a Bird 

// Las classes no debe de verse obligadas a utilizar metodos que no utilizan o que no son propios de esta 