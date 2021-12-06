//Setinha vou ter que separar.

export default function Stories(){

  const stories = [
    { nome: "9gag"},
    { nome: "meowed"},
    { nome: "barked"},
    { nome: "nathanwpylestrangeplanet"},
    { nome: "wawawicomics" },
    { nome: "respondeai"},
    { nome: "filomoderna"},
    { nome: "memeriagourmet"},
  ];

  return (
    <div class="stories">
      {stories.map((item) => <Story nome={item.nome} />)}
      <ion-icon class="setinha" name="chevron-forward-circle"></ion-icon>
    </div>
  );
}


function Story(props){
  return (
    <div class="story">
      <div class="imagem">
        <img src={`assets/img/${props.nome}.svg`} />
      </div>
      <div class="usuario">
        {props.nome}
      </div>
    </div>

  );
}