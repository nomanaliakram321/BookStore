import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native";
import PagerView from "react-native-pager-view";
import CustomSlides from "../../components/CustomSlides";
import {strings} from "../../utils/constants";
import Theme from "../../config/theme";
import helpers from "../../utils/helpers";
import styles from "./style";


class Design extends Component {
  render() {
    const {getCurrentPage,clickOnBtn, screenState, DotContainer} = this.props
    return (
      <View style={{flex: 1}}>
        <PagerView
          onPageSelected={e => {
            getCurrentPage(e.nativeEvent.position)
          }}
          style={styles.pagerView} initialPage={0}>
          <CustomSlides
            key='1' heading={strings.walkThroughHeading1}
            image={require('../../assets/walkthrough1.png')}
            description={strings.walkThroughDesc1}/>
          <CustomSlides
            key='2' heading={strings.walkThroughHeading2}
            image={require('../../assets/walkthrough2.png')}
            description={strings.walkThroughDesc2}/>
          <CustomSlides

            key='3' heading={strings.walkThroughHeading3}
            image={require('../../assets/walkthrough3.png')}
            description={strings.walkThroughDesc3}/>
          <CustomSlides
            signInSlide={true}
            onPress={clickOnBtn}
            key='4' heading={strings.walkThroughHeading4}

            description={strings.walkThroughDesc3}/>
        </PagerView>
        <DotContainer/>
      </View>
    );
  };
}


export default Design;
