import React from "react";
import {View, Animated, FlatList, Image,} from "react-native";
import helpers from "../utils/helpers";

const TopPickBooks = ({screenState}) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View>
      <Animated.FlatList
        onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true})}
        scrollEventThrottle={16}
        snapToInterval={helpers.calWp(100)}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        decelerationRate={0}
        bounces={false}
        data={screenState.topPickBooks}
        renderItem={
          ({item, index}) => {
            const inputRange = [
              (index - 2) * helpers.calWp(100),
              (index-1) * helpers.calWp(100),
              (index + 1) * helpers.calWp(100)
            ];
            const translateY = scrollX.interpolate(
              {inputRange, outputRange:[0, -45, 0]}
            )
            console.log(item)
            return (
              <Animated.View style={{
                marginHorizontal: helpers.calWp(10),
                marginTop: helpers.calHp(50),
                transform:[{translateY}],
                backgroundColor:'red',
                width:helpers.calWp(100),
                height:helpers.calHp(150)
              }}>
                <Image source={item.image} style={{height: helpers.calHp(150), width: helpers.calWp(100)}}/>
              </Animated.View>
            )
          }
        }/>
    </View>

  )
}
export default TopPickBooks;
