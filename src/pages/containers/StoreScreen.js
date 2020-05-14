import React, { Component } from 'react';
import ListProducts from '../sections/ListProducts';
import TitleStore from '../sections/TitleStore';

class StoreScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'STORE',
      subTitle: 'This is the Store Page'
    }
  }
  render() { 
    return (
      <main>
        <TitleStore
          title={this.state.title}
          subTitle={this.state.subTitle}
        />
        <ListProducts />
      </main>
    );
  }
}
 
export default StoreScreen;