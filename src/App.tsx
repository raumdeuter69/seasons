import React, { FC } from 'react';
import { render } from 'react-dom';
import './App.css';
import SeasonsDisplay from './Components/SeasonsDisplay';
import Spinner from './Components/Spinner';

// function App() {
//   window.navigator.geolocation.getCurrentPosition((position)=>(console.log(position)),
//   (err)=>(console.log(err)));
//   return (
//         <div className="App">
//           <h1>Hellloo</h1>
//     </div>
//   );
// }
class App extends React.Component<{},{latitude :number | null,error :string}>
{
  state={latitude:null,error: ''}

  componentDidMount(){
  // API Call
  window.navigator.geolocation.getCurrentPosition(position=>
    this.setState({latitude:position.coords.latitude}),
    err=>(this.setState({error: err.message})));
}

renderContent(){
    
  if(!this.state.error && this.state.latitude)
  return <SeasonsDisplay latitude={this.state.latitude} />
  
  if(!this.state.error && !this.state.latitude)
  return  <Spinner text={"Please accept location request "}/>
  
  if(this.state.error && !this.state.latitude)
  return <h1>Error: {this.state.error}</h1>
}
  render (){
return (
  <div>  
       {this.renderContent()}
  </div>
)
  }
}

export default App;
