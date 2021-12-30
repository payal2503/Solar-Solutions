import React from 'react';
import Header from './HeaderComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import AboutUs from '../Pages/AboutUs';
import ContactUs from '../Pages/ContactUs';
import Home from '../Pages/Home';
import Services from '../Pages/Services';
import Registration from '../Pages/Registration';

class Main extends React.Component {
    render(){
        return(
            <>
              <Header />  
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/contactus" component={ContactUs} />
                <Route path="/services" component={Services} />
                <Route path="/register" component={Registration} />
                <Route path="/aboutus" component={AboutUs} />
                <Redirect to = "/home"/>
              </Switch>
            </>
        )
    }
}

export default withRouter(Main);