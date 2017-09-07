import React from 'react';
import { Header } from 'semantic-ui-react';

export default class Home extends React.Component{
    render(){
        return(
            <div>
                <Header as="h1">Home</Header>
                <p>This section is filled with whatever you want to add in your homepage</p>
            </div>
        )
    }
}