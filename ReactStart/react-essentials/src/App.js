
import './App.css';
import coding from "./coding.jpg";

function Header(props){

  return(
    <header>
      <h1>{props.name}</h1>
    </header>
  );
}

function Main(props){
  
  return(
  <section>
    <p> Build <b>{props.adjective}</b> together....!</p>

    <img src= "https://avatars.githubusercontent.com/u/64433180?s=460&u=8ff38811d2082fcffb33421175fd7a6c4ddfa494&v=4" width={250} height={200} alt="SohaibFarooqui"/>
    <img src={coding} height= {200} width={250} alt="Codeing On React"/>
    <ul style={{textAlign: 'left'}}>
    { props.cars.map((cars) => ( <li key = { cars.id }> { cars.title } </li>) ) }
    </ul>
  </section>);
}

function Footer(props){
  return(
    <h3>CopyRigths {props.year}</h3>
  );
}

const cars = [
  "BMW",
  "AUDI",
  "VEZUL",
  "Nissan Gt"
]

const carsObject = cars.map((car,i) => ({id: i, title: car}));

function App() {
  return (
    <div className='App'>
     <Header name="Honda"/>
     <Main adjective="Civic" cars={carsObject}/>
     <Footer year={new Date().getFullYear()}/>
   </div>
  );
}

export default App;
