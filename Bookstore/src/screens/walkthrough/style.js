import {StyleSheet} from "react-native";
import helpers from "../../utils/helpers";

const styles=StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  dotStyle: {

    height: helpers.calHp(10),
    alignItems: 'center',
    borderRadius: helpers.calHp(100),
    marginHorizontal: 2,
  },
  dotContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: helpers.calHp(100),
    alignSelf: 'center',
    alignItems: 'center'
  }
})
export default styles;
