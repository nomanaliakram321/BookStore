import React, {Component} from 'react';
import {View} from "react-native";
import Design from "./design";
import Theme from "../../config/theme";
import helpers from "../../utils/helpers";
import styles from "./style";

class WalkThrough extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [
        {key: '0'},
        {key: '1'},
        {key: '2'},
        {key: '3'},
      ],
      currentPage: 0,
    }
  }

  getCurrentPage = (currentPage) => {
    console.log(currentPage)
    this.setState({currentPage: currentPage})
  }
  clickOnBtn = (type) => {
    if (type === 'signIn') {
      this.props.navigation.navigate('SignIn')
    } else {
      this.props.navigation.navigate('SignUp')

    }
  }
  const
  DotContainer = () => {
    return (
      <View style={styles.dotContainer}>
        {this.state.slides.map((e) => {
          let {currentPage} = this.state
          return (
            <View style={
              [styles.dotStyle, {
                backgroundColor: e.key == currentPage ? Theme.color.primary : 'rgba(90,189,140,0.25)',
                width: e.key == currentPage ? helpers.calHp(35) : helpers.calHp(10),
              }]
            }>
            </View>
          )
        })}
      </View>
    )
  }

  render() {
    return (
      <Design
        clickOnBtn={this.clickOnBtn}
        DotContainer={this.DotContainer} screenState={this.state}
        getCurrentPage={this.getCurrentPage}/>
    );
  }
}

export default WalkThrough;
