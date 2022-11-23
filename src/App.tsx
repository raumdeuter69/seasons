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
class App extends React.Component<{},{latitude :number | null,error :string}>
{
  state={latitude:null,error: ''}

  componentDidMount(){
  // API Call
  window.navigator.geolocation.getCurrentPosition(position=>
    this.setState({latitude:position.coords.latitude}),
    err=>(this.setState({error: err.message})));
}

  render (){
      if(!this.state.error && this.state.latitude)
    return <SeasonsDisplay latitude={this.state.latitude} />
    
    if(!this.state.error && !this.state.latitude)
    return <h1>Loading</h1>
    
    if(this.state.error && !this.state.latitude)
    return <h1>Error: {this.state.error}</h1>
  }
}

export default App;
