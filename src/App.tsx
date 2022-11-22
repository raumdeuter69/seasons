import React, { FC } from 'react';
import './App.css';
import SeasonsDisplay from './Components/SeasonsDisplay';

// function App() {
//   window.navigator.geolocation.getCurrentPosition((position)=>(console.log(position)),
//   (err)=>(console.log(err)));
//   return (
//         <div className="App">
//           <h1>Hellloo</h1>
//     </div>
//   );
// }
interface props {
  children?: React.ReactNode | React.ReactNode[];
  }
class App extends React.Component<{},{latitude :number | null}>
{
  constructor (props: {} | Readonly<{}>) {
// Constructor of React.Component
    super(props);
// Only time we do direct assignment to this.state
this.state={latitude:null};                               

// API Call
window.navigator.geolocation.getCurrentPosition((position)=>{
  this.setState({latitude:position.coords.latitude})
},
(err)=>(console.log(err)));
}

     render (){
    return <h1>Hellooo: {this.state.latitude}</h1>
  }
}

export default App;
