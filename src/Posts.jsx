export default function Posts(){

    const posts = [
        {nomeusuario: "meowed" , nomeimagem: "gato-telefone" , nomecurtida: "respondeai", qtdpessoas: 101.523},
        {nomeusuario: "barked", nomeimagem: "dog" , nomecurtida: "adorable_animals" , qtdpessoas: 99.159 }
    ];

    return (
       <div class="posts">
            {posts.map( (item) => <Post nomeusuario={item.nomeusuario} nomeimagem={item.nomeimagem} nomecurtida={item.nomecurtida} qtdpessoas={item.qtdpessoas}/>)}       
       </div>
    );
}

function Post (props) {
    return (
     <div class="post">
        <div class="topo">
            <div class="usuario">
            <img src={`assets/img/${props.nomeusuario}.svg`} />
            {props.nomeusuario}
            </div>
            <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>

        <div class="conteudo">
            <img src={`assets/img/${props.nomeimagem}.svg`} />
        </div>

        <div class="fundo">
            <div class="acoes">
            <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
            </div>

            <div class="curtidas">
            <img src={`assets/img/${props.nomecurtida}.svg`} />
            <div class="texto">
                Curtido por <strong>{props.nomecurtida}</strong> e <strong>outras {props.qtdpessoas} pessoas</strong>
            </div>
            </div>
        </div>

     </div>
    );
}