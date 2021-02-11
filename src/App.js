import React, { Component } from 'react';
import Layout from './Components/Layout/Layout';
import BurgerBuilder from './Components/Containers/BurgerBuilder/BurgerBuilder';
import Checkout from './Components/Containers/checkout/checkout';
import {Route,Switch} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div >
      <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>

      </div>
    );
  }
}

export default App;
