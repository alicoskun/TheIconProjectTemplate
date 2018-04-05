import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import IconDetail from './components/IconDetail';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/icon/:id' component={IconDetail}/>
        </Switch>
    </main>
)

export default Main;