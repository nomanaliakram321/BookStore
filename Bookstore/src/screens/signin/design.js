import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Theme from "../../config/theme";
import helpers from "../../utils/helpers";
import TextInputBox from "../../components/textInputBox";
import CustomButton from "../../components/CustomButton";
import CheckBox from "../../components/CheckBox";
import styles from "./style";

class Design extends Component {
  render() {
    let {onChangeText, screenState, setToggleCheckBox, props} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.backBtn} onPress={() => {
          props.navigation.navigate('WalkThrough')
        }}>
          <Icon name="angle-left" size={40} color={Theme.color.primary}/>
        </TouchableOpacity>

        <Text style={styles.heading}>Sign in</Text>
        <View>
          <TextInputBox placeholder={'Optional Group Special Code'}
                        onChangeText={text => onChangeText('code', text)}
                        name={'code'}
                        value={screenState.code}
                        autoCapitalize={'none'}
          />
          <TextInputBox placeholder={'Email Address'}
                        onChangeText={text => onChangeText('email', text)}
                        keyboardType={'email-address'}
                        autoCapitalize={'none'}
                        name={'email'}
                        value={screenState.email}
          />
          <TextInputBox placeholder={'Password'}
                        onChangeText={text => onChangeText('password', text)}
                        secureTextEntry={true}
                        value={screenState.password}
                        autoCapitalize={'none'}

          />
          <View style={styles.checkBoxContainer}>
            <CheckBox isCheck={screenState.toggleCheckBox} onPress={setToggleCheckBox}/>
            <Text style={styles.stayLogin}>
              Stay Logged In
            </Text>
            <Text style={styles.forgetPassword}>
              Forgot Password?
            </Text>

          </View>
          <CustomButton title={'Sign In'}
                        textStyle={{color: Theme.color.primary}}
                        btnStyle={{
                          backgroundColor: 'white',
                          borderColor: Theme.color.primary
                        }}/>
        </View>
      </View>
    );
  }
}



export default Design;
