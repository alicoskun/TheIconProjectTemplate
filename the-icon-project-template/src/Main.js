import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import IconDetail from './components/IconDetail';
import IconSetDetail from './components/IconSetDetail';

const Main = () => (
    <React.Fragment>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/icon/:id' component={IconDetail}/>
            <Route path='/iconset/:id' component={IconSetDetail}/>
        </Switch>
    </React.Fragment>
)

export default Main;