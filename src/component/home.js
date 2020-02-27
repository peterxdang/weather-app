import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class home extends Component {
    render () {
        return (
            <>
        <div>Home</div>
        <Link to = '/yas'>API</Link>
        </>
        )}
}

export default home;