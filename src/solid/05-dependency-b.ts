import { JsonDataBaseService, LocalDataBaseService, PostProvider } from "./05-dependency-c";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor(private service : PostProvider) {}

    async getPosts() {
        this.posts = await this.service.getPost();

        return this.posts;
    }
}