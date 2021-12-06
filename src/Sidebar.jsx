export default function Sidebar (){
    return (
        <div class="sidebar">
            <Usuario />
            <Sugestoes />
            <Links />
        </div>
    );
}

function Usuario(){
    return (
          <InformacaoUsuario link="assets/img/catanacomics.svg" usuario="catanacomics" texto="Catana"/>
    );
}

function InformacaoUsuario(props){
    return (
    <div class="usuario">
        <img src={props.link} />
        <div class="texto">
            <strong>{props.usuario}</strong>
            {props.texto}
        </div>
    </div>
    );
}

function Sugestoes(){

   const sugestoes = [
       { nomeimagem: "bad.vibes.memes" , razao: "Segue você" , seguir: "Seguir"},
       { nomeimagem: "chibirdart" , razao: "Segue você" , seguir: "Seguir"},
       { nomeimagem: "razoesparaacreditar" , razao: "Novo no Instagram" , seguir: "Seguir"},
       { nomeimagem: "adorable_animals", razao: "Segue você" , seguir: "Seguir"},
       { nomeimagem: "smallcutecats", razao: "Segue você" , seguir: "Seguir"}
   ];

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            
            {sugestoes.map( (item) => <Sugestao nomeimagem={item.nomeimagem} razao={item.razao} seguir={item.seguir} />)}

        </div>
    );
}

function Sugestao(props){
    return (
        <div class="sugestao">
              <div class="usuario">
                <img src={`assets/img/${props.nomeimagem}.svg`} />
                <div class="texto">
                  <div class="nome">{props.nomeimagem}</div>
                  <div class="razao">{props.razao}</div>
                </div>
              </div>

              <div class="seguir">{props.seguir}</div>
        </div>
    );

}


function Links(){
    return (
        <div>
            <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}