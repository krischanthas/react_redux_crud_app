import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamList from './Streams/StreamList';
import StreamCreate from './Streams/StreamCreate';
import StreamEdit from './Streams/StreamEdit';
import StreamShow from './Streams/StreamShow';
import StreamDelete from './Streams/StreamDelete';
import Header from './Header';
import history from '../history';

export default function() {
    return (
        <div className="ui container">
            {/* when creating and passing in a history object to browser router, it will attempt to use it */}
            <Router history={history}>
                <div>
                    <Header/>
                    <Switch>
                        <Route path="/" exact component={StreamList} />
                        {/* :id must be below new, Switch will take first match */}
                        <Route path="/streams/new" component={StreamCreate} />
                        <Route path="/streams/:id" component={StreamShow} />
                        <Route path="/streams/edit/:id" component={StreamEdit} />
                        <Route path="/streams/delete/:id" component={StreamDelete} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
