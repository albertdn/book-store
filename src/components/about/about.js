import React from 'react';
import { Header } from 'semantic-ui-react';

export default class About extends React.Component{
    render(){
        return(
            <div>
                <Header as="h1">About</Header>
                <p>This page contain information about your company</p>
            </div>
        )
    }
}