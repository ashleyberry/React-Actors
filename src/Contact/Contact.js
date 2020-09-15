import React, { Component } from 'react';

class Contact extends Component {

    state = {
        firstName: '',
        lastName: '',
        bestImpression: '',
    }

    onBestImpressionChange = (event) => {
        console.log( 'in onBestImpressionChange:', event.target.value )
        this.setState({
            bestImpression: event.target.value
        })
    } // end onBestImpressionChange

    onFirstNameChange = (event) => {
        console.log( 'in onFirstNameChange:', event.target.value )
        this.setState({
            firstName: event.target.value
        })
    } // end onFirstNameChange

    onLastNameChange = (event) => {
        console.log( 'in onLastNameChange:', event.target.value )
        this.setState({
            lastName: event.target.value
        })
    } // end onLastNameChange

    onJoinUsClick = () => {
        console.log( 'in onJoinUsClick' );
        this.setState({
          firstName: this.state.firstName
        })
      } // end onJoinUsClick

    render(){
        return (
            <div>
                <h2>Contact</h2>
                <div>
                    <input type='text' placeholder='First Name' onChange={this.onFirstNameChange}/>
                    <input type='text' placeholder='Last Name' onChange={this.onLastNameChange}/>
                    <input type='text' placeholder='Best Impression' onChange={this.onBestImpressionChange}/>
                    <button onClick={this.onJoinUsClick}>Join Us</button>
                    <p>{this.state.firstName} {this.state.lastName}'s best impression is {this.state.bestImpression}</p>
                </div>
                <p>Phone: 1-800-WE-REACT</p>
                <p>Email: info@ReactActors.com</p>
            </div>
        )
    }
} // end component

export default Contact