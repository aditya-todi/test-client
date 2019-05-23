import React, { Component } from 'react';
import Medicine from './Medicine'

import servies from './service';
import './App.css';

class App extends Component {
  state = {
    medicines: [],
  };

  getMedicine = () => {
    servies.getMedicines()
      .then(res => {
        // console.log(res.data)
        this.setState({
          ...this.state,
          medicines: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  addMedicine = () => {
    let medicine = {
      "hsnCode": "hsnCode-" + Math.random().toString(),
      "name": "test_Medicine-" + Math.random().toString(),
      "price": Math.random(),
      "brandName": "testBrandName-" + Math.random().toString(),
      "stockist": "tet-stockist-" + Math.random().toString(),
    }
    servies.addMedicine(medicine)
      .then(res => {
        this.setState({
          ...this.state,
          medicines: [...this.state.medicines, res.data]
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  deleteMedicine = id => {
    servies.deleteMedicine(id)
      .then(_ => {
        this.getMedicine()
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.getMedicine()
  }

  render() {
    return (
      <div className="App">
        {this.state.medicines.map(medicine => {
          return (
            <Medicine key={medicine._id} medicine={medicine} deleteMedicine={this.deleteMedicine} />
          )
        }
        )}
        <button onClick={this.addMedicine}>Add</button>
        <button onClick={this.getMedicine}>Refresh</button>
      </div>
    )
  }
}

export default App;
