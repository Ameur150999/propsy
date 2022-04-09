import Profile from './profile/Profile';
import profil from './profil.png';
import './App.css';


function App() {
 const FNname=(params)=> {
  alert(`Welcome ${params}`)
 }

 
  return (
    <>
    <Profile fullName="Ameur Saoudi " bio="Real Madrid"  profession="Student" FNPropsName={FNname} >
      <img src={profil} alt="pic" style={{width:'30rem', height:"30rem" , borderRadius:'2em'}}/>
    </Profile>

    </>
  );
 
}


export default App;