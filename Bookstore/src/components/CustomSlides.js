import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from "react-native";
import helpers from "../utils/helpers";
import Theme from "../config/theme";
import CustomButton from "./CustomButton";

class CustomSlides extends Component {
  render() {
    const {key, heading, description,onPress, image, signInSlide} = this.props;
    return signInSlide ? (
      <View key={key} style={styles.container}>
        <Image source={require('../assets/leaves.png')}
               style={styles.slide4Image2}/>
        <Image source={require('../assets/leave2.png')}
               style={styles.slide4Image3}/>
        <Text style={styles.heading}>
          {heading}
        </Text>
        <View style={{marginVertical: '12%'}}></View>
        <CustomButton  title={'Sign In'} onPress={()=>{onPress('signIn')}}/>
        <CustomButton title={'Sign Up'} onPress={()=>onPress('signUp')}/>
        <Image source={require('../assets/walkthrough4.png')}
               style={styles.slide4Image1}/>
      </View>
    ) : (
      <View key={key} style={styles.container}>
        <Text style={styles.heading}>
          {heading}
        </Text>
        <Text style={styles.desc}>
          {description}
        </Text>
        <Image source={image} style={styles.image}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
// alignItems:'center',
    paddingTop: helpers.calHp(100),
    // justifyContent:'center',
    backgroundColor: 'white'
  },
  image: {
    height: helpers.calHp(300),
    width: helpers.calWp(300),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: helpers.calHp(30),
    justifyContent: 'center',
  },
  heading: {
    textAlign: 'center',
    width: '100%',

    color: Theme.color.primary,
    fontFamily: Theme.fontFamily.SFProRoundedMedium,
    fontSize: helpers.calHp(30)
  },
  desc: {
    textAlign: 'center',
    color: Theme.color.secondary,
    // marginTop:helpers.calHp(5),
    fontFamily: Theme.fontFamily.SFProRoundedLight,
    fontSize: helpers.calHp(14),

  },
  slide4Image3: {
    resizeMode: 'contain',
    position: 'absolute',
    height: helpers.calHp(200),
    right: helpers.calWp(-50),
    top: helpers.calHp(100),
    width: helpers.calWp(100)
  },
  slide4Image2: {
    resizeMode: 'contain', position: 'absolute',
    height: helpers.calHp(350), left: helpers.calWp(-30), width: helpers.calWp(100)
  }, slide4Image1: {
    resizeMode: 'contain',
    height: helpers.calHp(400),
    width: helpers.calWp(400),
    right: helpers.calWp(100),
    top: helpers.calHp(380),
    position: 'absolute',
  }
})

export default CustomSlides;
