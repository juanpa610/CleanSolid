import { PostService } from './05-dependency-b';
import { JsonDataBaseService, LocalDataBaseService, WeaApiPostServoice } from './05-dependency-c';


// Main
(async () => {

    const provider = new WeaApiPostServoice();

    const postService = new PostService(provider);

    const posts = await postService.getPosts();

    console.log({ posts });


})();


// ahora aqui estoy implementando el principio de Open and Closed ya que,
// mis classe estan abiertas a la modificacion pero no a la modificacion 