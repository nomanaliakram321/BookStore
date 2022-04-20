import React, {Component} from 'react';
import {TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Theme from "../config/theme";
import helpers from "../utils/helpers";

class CheckBox extends Component {
  render() {
    let {isCheck, onPress} = this.props
    return (
      <TouchableOpacity onPress={onPress} style={{
        height: helpers.calHp(25),
        width: helpers.calWp(25),
        backgroundColor:isCheck?Theme.color.primary:'transparent',
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:helpers.calWp(8),
        borderWidth:1
      }}>
        { isCheck && <Icon name="check" size={20} color={Theme.color.white}/>}
      </TouchableOpacity>
    );
  }
}

export default CheckBox;
