import React, {Component} from 'react';
import {View} from "react-native";
import Design from "./design";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topPickBooks: [
        {
          id: 1,
          title: 'Book 1',
          image: require('../../assets/top-picks_books/book1.png')
        },{
          id: 2,
          title: 'Book 2',
          image: require('../../assets/top-picks_books/book2.png')
        },{
          id: 3,
          title: 'Book 3',
          image: require('../../assets/top-picks_books/book3.png')
        },
        {
          id: 4,
          title: 'Book 2',
          image: require('../../assets/top-picks_books/book2.png')
        },{
          id: 5,
          title: 'Book 3',
          image: require('../../assets/top-picks_books/book3.png')
        },
      ]
    }
  }

  render() {
    return (
      <Design screenState={this.state}/>
    );
  }
}

export default Home;
