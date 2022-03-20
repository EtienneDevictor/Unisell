import React from 'react';
import Header from './Component/Header'
import Footer from './Component/Footer'
import Body from './Component/Body'

class Home extends React.Component {
  render() {
    return(
      <div>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    )
  }
}

export default Home;
