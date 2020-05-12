import React, { Component } from 'react'
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from './api';

export default class App extends Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    let fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    let fetchedData = await fetchData(country);
    this.setState({data: fetchedData, country: country});
  }

  render() {
    return (
      <div>
        <Cards data={this.state.data} />
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={this.state.data} country={this.state.country}/>
      </div>
    )
  }
}
