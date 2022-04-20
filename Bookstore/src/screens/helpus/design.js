import React, {Component} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome";
import Theme from "../../config/theme";
import TextInputBox from "../../components/textInputBox";
import CheckBox from "../../components/CheckBox";
import CustomButton from "../../components/CustomButton";
import {strings} from "../../utils/constants";
import helpers from "../../utils/helpers";

class Design extends Component {
  render() {
    let {screenState, onChangeText, props} = this.props;
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity style={styles.backBtn} disabled={true} onPress={() => {
          props.navigation.navigate('WalkThrough')
        }}>
          {/*<Icon name="angle-left" size={40} color={Theme.color.primary}/>*/}
        </TouchableOpacity>

        <Text style={styles.heading}>Help Us to Help You</Text>
        <Text style={
          styles.desc
        }>
          {strings.helpUsDesc}
        </Text>
        <TextInputBox placeholder={'State'}
                      onChangeText={text => onChangeText('state', text)}
                      name={'state'}
                      value={screenState.state}
                      autoCapitalize={'words'}
        />
        <TextInputBox placeholder={'Country'}
                      onChangeText={text => onChangeText('country', text)}
                      name={'country'}
                      value={screenState.country}
                      autoCapitalize={'words'}
        />
        <TouchableOpacity>
          <Text style={styles.skipText}>
            {'Skip'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default Design;
