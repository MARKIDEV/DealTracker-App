import React, { Component } from 'react';
import ClientCard from './clientcard';

export default class admin extends Component {
    render() {
        return (
        
                 <div >
          {this.props.clients.map(el => (
            <ClientCard card={el}/>
          ))}
        </div>
           
        )
    }
}
