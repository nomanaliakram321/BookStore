import {StyleSheet} from "react-native";
import helpers from "../../utils/helpers";
import Theme from "../../config/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: helpers.calHp(20)
  },
  backBtn: {
    height: helpers.calHp(50),
    width: helpers.calWp(40)
  },
  heading: {
    fontSize: helpers.calHp(30),
    fontFamily: Theme.fontFamily.SFProRoundedBold,
  },
  signMeText: {
    fontSize: helpers.calHp(12),
    marginLeft: helpers.calWp(10),
    fontFamily: Theme.fontFamily.SFProTextLight
  },
  checkBoxContainer: {
    flexDirection: 'row',
    marginVertical: helpers.calHp(5),
    alignItems: 'center'
  },
  desc:  {
    textAlign: 'justify',
    fontFamily: Theme.fontFamily.SFProTextLight,
    paddingRight: helpers.calWp(10),
    fontSize: helpers.calHp(15),
    paddingBottom: helpers.calHp(20)
  },
  skipText:  {
    textAlign: 'right',
    // backgroundColor:'red',
    alignSelf:'flex-end',
    width:helpers.calWp(50),
    color:Theme.color.primary,
    fontFamily:Theme.fontFamily.SFProTextRegular,
    paddingRight: helpers.calWp(10),
    fontSize: helpers.calHp(15),
    paddingTop:helpers.calHp(10)
  }
})
export default styles;
