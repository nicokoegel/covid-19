import React, { Component } from 'react'
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from './api';

export default class App extends Component {
  state = {
    data: {}
  }

  async componentDidMount() {
    let fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  render() {
    return (
      <div className="center">
        <Cards data={this.state.data}/>
        <Chart />
        <CountryPicker />
      </div>
    )
  }
}
