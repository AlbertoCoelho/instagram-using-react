export default function Sidebar (){
    return (
        <div class="sidebar">
            <Usuario />
        </div>
    );
}

function Usuario(){
    return (
      <div class="usuario">
          <InformacaoUsuario link="assets/img/catanacomics.svg" usuario="catanacomics" texto="Catana"/>
      </div>
    );

}

function InformacaoUsuario(props){
    return (
    <div>
        <img src={props.link} />
        <div class="texto">
            <strong>{props.usuario}</strong>
            {props.texto}
        </div>
    </div>
    );

}