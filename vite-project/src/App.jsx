import './App.css';
import DisplayBio from './DisplayBio';
import { Component } from 'react';
import Developer from './Developer';
import AddDeveloper from './AddDeveloper';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';

export class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      developers: []
    }
  }

  // handleNewDeveloper = (dev) => {
  //   dev.id = this.state.developers.length + 1;
  //   let newDev = [...this.state.developers, dev];
  //   this.setState({ developers: newDev });
  // }

  componentDidMount(){
    fetch('https://dev-bios-api-dot-cog01hprmn542jqme4w772bk1dxpr.uc.r.appspot.com/developers/all')
    .then(response => response.json())
    .then(devs => {this.setState({developers:devs})})
      .catch(error => console.error('Error fetching developers: ', error));
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/developers" element={<DisplayBio developers={this.state.developers} />} />
          <Route path="/developers/add" element={<AddDeveloper />} />
        </Routes>
      </Router>
    )
  }
}

export default App
