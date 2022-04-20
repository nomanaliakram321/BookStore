import {StyleSheet} from "react-native";
import helpers from "../../utils/helpers";
import Theme from "../../config/theme";

const styles=StyleSheet.create({
  topContainer:  {
    height: helpers.calHp(300),
    paddingTop: helpers.calHp(60),
    backgroundColor: Theme.color.primary,
    borderBottomLeftRadius: helpers.calHp(190),
    borderBottomRightRadius: helpers.calHp(190)
  },
  menuContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: helpers.calWp(20)
    , justifyContent: 'space-between'
  },
  headingText:{
    fontSize: helpers.calHp(24),
    fontFamily: Theme.fontFamily.SFProTextBold,
    color: '#fff'
  },
  menuBtn:  {
    height: helpers.calHp(50),
    alignItems: 'center',
    justifyContent: 'center',
    width: helpers.calWp(40)
  }
})
export default styles;
