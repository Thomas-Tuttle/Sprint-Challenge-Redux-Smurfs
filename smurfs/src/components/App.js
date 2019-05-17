import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf, deleteSmurf } from '../actions';
import Smurfs from './Smurfs';
import './App.css';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
//  */
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>SMURFS! 2.0 W/ Redux</h1>
//         <div>Welcome to your Redux version of Smurfs!</div>
//         <div>Start inside of your `src/index.js` file!</div>
//         <div>Have fun!</div>
//       </div>
//     );
//   }
// }

// export default App;

class App extends Component {
  state = {
    name: '',
    age: '',
    height: ''
  };

  componentDidMount() {
    this.props.getSmurfs();
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  addSmurf = event => {
    event.preventDefault();

    const { name, age, height } = this.state;
    this.props.addSmurf({ name, age, height });
    this.setState({ name: '', age: '', height: '' });
  }

  deleteSmurf = (event, id) => {
    event.preventDefault();
    this.props.deleteSmurf(id);
  }

  render() {
    const { smurfs, fetchingSmurfs, error } = this.props;
    const { name, age, height } = this.state;

    if (fetchingSmurfs) {
      return <h2 className="App">Loading...</h2>;
    } else if (error) {
      return <h2 className="App">Not Found</h2>;
    } else {
      return (
        <div className="App">
          <h1>SMURFS! 2.0 W/ Redux</h1>

          

          <form onSubmit={this.addSmurf}>
          <h3>Add Smurf</h3>
            <input
              placeholder="...Name?"
              type="text"
              name="name"
              value={name}
              onChange={this.handleInput}
            />

            <input
              placeholder="...Age?"
              type="text"
              name="age"
              value={age}
              onChange={this.handleInput}
            />

            <input
              placeholder="...Height?"
              type="text"
              name="height"
              value={height}
              onChange={this.handleInput}
            />

            <button className="addBtn" type="submit"> Add </button>

          </form>

        <h1>Smurfs</h1>
          <Smurfs smurfs={smurfs} deleteSmurf={this.deleteSmurf} />

        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    error: state.error
  };
};

export default connect(mapStateToProps, { getSmurfs, addSmurf, deleteSmurf })(App);