import React, {Component} from 'react';
import Design from "./design";


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state={
      email:null,
      password:null,
      code:null,
      fullName:null,
      phoneNumber:null,
      toggleCheckBox:false,
    }
  }
  onChangeText = (field, text) => {
    this.setState({[field]: text});
  };
  setToggleCheckBox=()=>{
    this.setState({toggleCheckBox:!this.state.toggleCheckBox})
  }
  render() {
    return (
      <Design props={this.props} setToggleCheckBox={this.setToggleCheckBox} screenState={this.state} onChangeText={this.onChangeText}/>
    );
  }
}

export default SignUp;
