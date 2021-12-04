export default function Fundomobile(){
    return (
        <div class="fundo-mobile">
            <Ionicon />
        </div>
    );
}

function Ionicon(){

    const ionicon = [
        {nome: "home"},
        {nome: "search-outline"},
        {nome: "add-circle-outline"},
        {nome: "heart-outline"},
        {nome: "person-outline"}
    ];

    return (
        <div>
            {ionicon.map ( (item) => <Inserindoionicon nome = {item.nome}/>) }
        </div>
    );
}

function Inserindoionicon(props){
    return (
        <ion-icon name={props.nome}></ion-icon>
    );
}