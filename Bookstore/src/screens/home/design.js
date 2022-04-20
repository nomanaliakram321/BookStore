import React, {Component} from 'react';
import {FlatList, Animated, Image, Text, TouchableOpacity, View} from "react-native";
import helpers from "../../utils/helpers";
import Theme from "../../config/theme";
import styles from "./style";
import Icon from "react-native-vector-icons/Feather";
import TopPickBooks from "../../components/TopPickBooks";

class Design extends Component {
  constructor(props) {
    super(props);
  }


  onViewableItemsChanged = ({viewableItems, changed}) => {
    console.log("Visible items are", viewableItems);
    console.log("Changed in this iteration", changed);
  }

  render() {
    let {screenState} = this.props;

    return (
      <View style={{flex: 1}}>
        <View style={styles.topContainer}>
          <View style={styles.menuContainer}>
            <Text style={styles.headingText}>Our Top Picks</Text>
            <TouchableOpacity style={styles.menuBtn} onPress={() => {
              props.navigation.navigate('WalkThrough')
            }}>
              <Icon name="menu" size={30} color={Theme.color.white}/>
            </TouchableOpacity>
          </View>
          <TopPickBooks screenState={screenState}/>

          <View style={{flexDirection:'row'}}>

          </View>
        </View>
      </View>
    );
  }
}

export default Design;
