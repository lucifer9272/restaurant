import React, { Component } from 'react';
import NavBarManu from './NavBarManu';

class RestaurantCreate extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            email: null,
            address: null,
            rating: null,
        };

        
        this.create = this.create.bind(this);
    }

    create() {
        fetch('http://localhost:3000/restaurant', {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp) => {
                alert("Restaurant Has Been Added");
            });
        });
    }

    render() {
        return (
            <div>
                <NavBarManu />
                <h1>Restaurant Create</h1>
                <input onChange={(event) => { this.setState({ name: event.target.value }) }} placeholder="Restaurant Name" /><br></br>
                <input onChange={(event) => { this.setState({ email: event.target.value }) }} placeholder="Restaurant Email" /><br></br>
                <input onChange={(event) => { this.setState({ address: event.target.value }) }} placeholder="Restaurant Address" /><br></br>
                <input onChange={(event) => { this.setState({ rating: event.target.value }) }} placeholder="Restaurant Rating" /><br></br>
                <button onClick={this.create}>Add Restaurant</button> 
            </div>
        );
    }
}

export default RestaurantCreate;
