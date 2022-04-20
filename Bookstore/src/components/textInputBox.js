import React, {Component} from 'react';
import {TextInput, StyleSheet, View} from "react-native";
import helpers from "../utils/helpers";
import Theme from "../config/theme";

class TextInputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      borderColor: 'transparent',
      activeIcon: false,
    };
  }

  onFocus() {
    this.setState({
      borderColor: '#56CAFB',
      activeIcon: true,
    });
  }

  onBlur() {
    this.setState({
      borderColor: 'transparent',
      activeIcon: false,
    });
  }

  render() {
    const {
      placeholder,
      autoCapitalize,
      textInputStyle,
      onChangeText,
      icon,
      multiline,
      searchBar,
      discoverSearch,
      inputTextStyle,
      value,
      secureTextEntry,
      keyboardType,
    } = this.props;
    return (

      <View style={[styles.inputTextStyle, {
        borderColor: this.state.activeIcon ? Theme.color.primary : this.state.borderColor,
      }, inputTextStyle ? inputTextStyle : null]}>
        <TextInput onBlur={() => this.onBlur()}
                   onFocus={() => this.onFocus()}
                   onChangeText={onChangeText}
                   keyboardType={keyboardType}
                   autoCapitalize={autoCapitalize}
                   secureTextEntry={secureTextEntry}
                   ref={ref =>
                     ref &&
                     ref.setNativeProps({
                       text: value,
                       style: [{
                         fontFamily: Theme.fontFamily.SFProTextRegular,

                       },],

                     })
                   }
                   placeholder={placeholder}
                   style={styles.textInput}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputTextStyle: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: 'rgba(239,239,239,0.9)',
    borderWidth: 1.5,
    height: helpers.calHp(56),
    marginVertical: helpers.calHp(8),
    borderRadius: helpers.calWp(20)

  },
  textInput:{marginHorizontal: helpers.calWp(20),fontSize: helpers.calHp(15)}
})
export default TextInputBox;
