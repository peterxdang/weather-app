import React, {Component} from 'react';
import axios from 'axios';

class Api extends Component {

apiCall = () => {
    console.log('click')
    axios.get('/johncena').then((response)=> {
        console.log('this is working: hitting api', response)
    }).catch(() => 
       console.log('not woorking')
    )
}

render () {
    return (
        <div>
            <button onClick = {this.apiCall}>api trigger</button>
        </div>


    )
}
}

export default Api;