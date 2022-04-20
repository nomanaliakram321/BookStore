import React, {Component} from 'react';
import {Text, View} from "react-native";
import Design from "./design";

class HelpUs extends Component {
  constructor(props) {
    super(props);
    this.state={
      state:null,
      country:null,
    }
  }
  onChangeText = (field, text) => {
    this.setState({[field]: text});
  };
  render() {
    return (
      <Design screenState={this.state} props={this.props} onChangeText={this.onChangeText} />
    );
  }
}

export default HelpUs;
