import React, {Component} from 'react';
import Design from "./design";
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state={
      email:null,
      password:null,
      code:null,
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

export default SignIn;
