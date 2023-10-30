import { Post } from "./05-dependency-b";
import localPost from "./local-database.json";

export abstract class PostProvider {
    abstract getPost(): Promise<Post[]>
}


export class LocalDataBaseService implements PostProvider {

    async getPost() {
        return [
            {
                'userId': 1,
                'id': 1,
                'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                'body': 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
            },
            {
                'userId': 1,
                'id': 2,
                'title': 'qui est esse',
                'body': 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
            }]
    }

}

export class JsonDataBaseService implements PostProvider{
    async getPost(){
        return localPost;
    }
}

// asi es como estamos aplicando el principio de substituion liskov que lo que dice es que:
// nosotros podriamos reemplazar cualquier classe, por unas classe que implemente o extiena de 
// otra classe 



export class WeaApiPostServoice implements PostProvider{

    async getPost(){
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const result: Post[] = await res.json();
        return result;
    }
}

// El codigo que implementa lógica de alto nivel 
// no debe depender de código que implementa los detalles a bajo nivel