import React, { Component } from 'react';
import './App.css';


var AnimalWindow = React.createClass({
  render: function() {
    return (
        <div className="App-intro">
          {this.props.streak}
        </div>
      );
  }
});


var HabitTitle = React.createClass({
  getInitialState: function() {
    return {title: "Growing Habits"};
  },
  render: function() {
    return (
      <div className="App-header">
        <h1>{this.state.title}</h1>
      </div>
    );
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {streak: 0};
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDeincrement = this.handleDeincrement.bind(this);
  }

  handleIncrement(){
    if(this.state.streak === 66) { return;}
    this.setState({streak: this.state.streak + 1})
  }

  handleDeincrement(){
    if(this.state.streak === 0) {return;}
    this.setState({streak: this.state.streak - 1})
  }

  render() {
    return (
      <div className="App" style={{background:  'hsl(' + this.state.streak * 4 + ', 80%, 33%)'}}>
        <HabitTitle />
        <AnimalWindow streak={this.state.streak}/>
        <div className="increment" onClick={this.handleIncrement}>+</div><div className="deincrement" onClick={this.handleDeincrement}>-</div>
      </div>
    );
  }
}

export default App;
