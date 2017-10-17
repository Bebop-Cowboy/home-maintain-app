import React, { Component } from 'react';
import Projects from './Components/Project';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      projects: []
    }
  }

componentWillMount(){
  this.setState({projects: [
    {
      title: 'Gutter Cleaning',
      category: 'Upkeep'
    },
    {
      title: 'Roofing',
      category: 'Maintenance'
    } ,
    {
      title: 'Lawn Care',
      category: 'Maintenance'
    }
  ]});
}

  render() {
    return (
      <div className="App">
        <AddProject />
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
