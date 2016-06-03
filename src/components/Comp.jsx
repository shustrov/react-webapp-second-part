import React from 'react';

class Comp extends React.Component {

    constructor(){
        super();
        this.state = {
            messages: [
                'ho ho oh'
            ]
        }
    }

    render(){
        var messageNodes = this.state.messages.map((message)=> {
            return (
                <div>{message}</div>
            );
        });

        return (
            <div>{messageNodes}</div>
        );
    }

}

export default Comp;