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
  forgetPassword: {
    fontSize: helpers.calHp(12),
    textAlign: 'right', width: '58%',
    fontFamily: Theme.fontFamily.SFProTextLight
  },
  stayLogin: {
    fontSize: helpers.calHp(12),
    marginLeft: helpers.calWp(10),
    fontFamily: Theme.fontFamily.SFProTextLight
  },
  checkBoxContainer: {
    flexDirection: 'row',
    marginVertical: helpers.calHp(5),
    alignItems: 'center'
  }

})
export default styles;
