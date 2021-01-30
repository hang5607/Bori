import React from 'react';

class Customer extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.id}</h2>
                <h2>{this.props.name}</h2>
                <h2>{this.props.phoneNumber}</h2>
                <h2>{this.props.doctor}</h2>
                <h2>{this.props.birthday}</h2>
                <h2>{this.props.visitDay}</h2>
            </div>
        )
    }
}

export default Customer;