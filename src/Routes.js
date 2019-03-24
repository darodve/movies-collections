import React from 'react';
import { Switch, Route } from 'react-router';

import Movies from './Movies';
import Collections from './Collections';
import DetailMovie from './DetailMovie';
import Error404 from './Error404';

export default props =>
    <Switch>
        <Route exact path='/' component={Movies} />
        <Route exact path='/collections' component={Collections} />
        <Route exact path='/movie/:id' component={DetailMovie} />
        <Route component={Error404} />
    </Switch> 