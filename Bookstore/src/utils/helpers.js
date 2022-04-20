import {Platform} from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

const screenWidth = 375;
const screenHeight =  812;

function calHp(heightPixel) {
  let calculatedHeight = ((heightPixel / screenHeight) * 100) + 0.3;
  return hp(calculatedHeight);
}

function calWp(widthPixel) {
  let calculatedWidth = (widthPixel / screenWidth) * 100;
  return wp(calculatedWidth);
}
const helpers = {
  calHp,
  calWp,
}
export default helpers;
