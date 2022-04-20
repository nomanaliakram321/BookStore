import React, {Component} from 'react';
import {Text, TouchableOpacity,StyleSheet, View} from "react-native";
import Theme from "../config/theme";
import helpers from "../utils/helpers";

class CustomButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
   const {title,textStyle,btnStyle,onPress}=this.props
    return (
      <TouchableOpacity onPress={onPress} style={[styles.btnStyle,btnStyle?btnStyle:null]} >
        <Text style={[styles.textStyle,textStyle?textStyle:null]}>{title}</Text>
      </TouchableOpacity>
    );
  }
}
const styles=StyleSheet.create({
  btnStyle:{
    width:'80%',
    height:helpers.calHp(56),
    marginVertical:helpers.calHp(10),
    borderRadius:helpers.calWp(15),
    alignSelf:'center',
    borderWidth: 1,
    borderColor:'transparent',
    backgroundColor:Theme.color.primary,
    alignItems:'center',
    justifyContent:'center'
  },
  textStyle:{
fontFamily:Theme.fontFamily.SFProTextRegular,
    color:Theme.color.white,
    fontSize:helpers.calHp(15)
  }

})
export default CustomButton;
