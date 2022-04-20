import React, {Component} from 'react';
import { ScrollView, Text, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Theme from "../../config/theme";
import TextInputBox from "../../components/textInputBox";
import CheckBox from "../../components/CheckBox";
import CustomButton from "../../components/CustomButton";
import styles from "./style";

class Design extends Component {
  render() {
    let {onChangeText, screenState, setToggleCheckBox, props} = this.props;
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity style={styles.backBtn} onPress={() => {
          props.navigation.navigate('WalkThrough')
        }}>
          <Icon name="angle-left" size={40} color={Theme.color.primary}/>
        </TouchableOpacity>

        <Text style={styles.heading}>Sign Up</Text>
        <View>
          <TextInputBox placeholder={'First & Last Name'}
                        onChangeText={text => onChangeText('fullName', text)}
                        name={'fullName'}
                        value={screenState.fullName}
                        autoCapitalize={'none'}
          />
          <TextInputBox placeholder={'Email'}
                        onChangeText={text => onChangeText('email', text)}
                        keyboardType={'email-address'}
                        autoCapitalize={'none'}
                        name={'email'}
                        value={screenState.email}
          />
          <TextInputBox placeholder={'Mobile Phone'}
                        onChangeText={text => onChangeText('phoneNumber', text)}
                        keyboardType={'numeric'}
                        name={'phoneNumber'}
                        value={screenState.phoneNumber}
          />
          <TextInputBox placeholder={'Group Special Code (optional)'}
                        onChangeText={text => onChangeText('code', text)}
                        name={'code'}
                        value={screenState.code}
          />
          <TextInputBox placeholder={'Password'}
                        onChangeText={text => onChangeText('password', text)}
                        secureTextEntry={true}
                        value={screenState.password}
                        autoCapitalize={'none'}
          />
          <View style={
           styles.checkBoxContainer
          }>
            <CheckBox isCheck={screenState.toggleCheckBox} onPress={setToggleCheckBox}/>
            <Text style={styles.signMeText}>
              Please sign me up for the monthly newsletter.
            </Text>


          </View>
          <CustomButton title={'Sign In'}
                        onPress={()=>{props.navigation.navigate('HelpUs')}}
                        textStyle={{color: Theme.color.primary}}
                        btnStyle={{
                          backgroundColor: 'white',
                          borderColor: Theme.color.primary
                        }}/>
        </View>
      </ScrollView>
    );
  }
}



export default Design;
