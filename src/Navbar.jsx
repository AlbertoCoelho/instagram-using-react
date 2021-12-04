export default function Navbar(){
    return (
      <div class="navbar">
        <Container />
      </div>
    );
}


function Logo(){
return (
    <div class="logo">
        <ion-icon name="logo-instagram"></ion-icon>
        <div class="separador"></div>
        <img src="./assets/img/logo.png" />
    </div>
);
}

function LogoMobile(){
  return (
    <div class="logo-mobile">
        <ion-icon name="logo-instagram"></ion-icon>
    </div>
  ); 
}

function InstagramMobile(){
  return (
    <div class="instagram-mobile">
       <img src="./assets/img/logo.png" />
    </div>
    );
}

function Pesquisa(){
    return (
      <div class="pesquisa">
        <input type="text" placeholder="Pesquisar" />
      </div>
    );
}

function Icones(){
    const ionicon = [
    {nome: "paper-plane-outline"},
    {nome: "compass-outline"},
    {nome: "heart-outline"},
    {nome: "person-outline"}
    ];
    
    return (
        <div class="icones">
            {ionicon.map( (item) => <RetornoIonIcon nome={item.nome} />)}
        </div>
    );
   
}

function RetornoIonIcon(props){
    return (
        <ion-icon name={props.nome}></ion-icon>
    );
}



function IconesMobile(){
    return (
        <div class="icones-mobile">
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
    );
 
}


function Container(){
    return (
        <div class="container">
            <Logo />
            <LogoMobile />
            <InstagramMobile />
            <Pesquisa />
            <Icones />
            <IconesMobile />
        </div>
    );
}

