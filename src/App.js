import React from "react";
import "./App.css";
import DisplayEmployee from "./components/DisplayEmployee";
import axios from "axios";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpsoms: this.getEmployee()
    };
    this.getEmployee = this.getEmployee.bind(this);
  }
  
  getEmployee() {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then(response => response.data)
      .then(data => {
        this.setState({
          simpsoms: data[0],
        });
      });
  }
  render() {
    console.log(this.state.simpsoms);
    return (
      <div className="App">
        <DisplayEmployee {...this.state.simpsoms} />
        <button type="button" onClick={this.getEmployee}>
          Get new
        </button>
      </div>
    );
  }
}

export default App;
