import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBarManu from './NavBarManu';

function RestaurantUpdate() {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState({
        name: '',
        email: '',
        address: '',
        rating: '',
    });

    useEffect(() => {
        fetch(`http://localhost:3000/restaurant/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((result) => {
                setRestaurant(result);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [id]);

    const updateRestaurant = () => {
        fetch(`http://localhost:3000/restaurant/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(restaurant),
        })
            .then((result) => {
                if (result.ok) {
                    alert('Restaurant Has Been Updated');
                }
            });
    };

    return (
        <div>
            <NavBarManu />
            <h1>Restaurant Update</h1>
            <input
                type="text"
                placeholder="Restaurant Name"
                value={restaurant.name}
                onChange={(e) => setRestaurant({ ...restaurant, name: e.target.value })}
            />
            <br />
            <input
                type="text"
                placeholder="Restaurant Email"
                value={restaurant.email}
                onChange={(e) => setRestaurant({ ...restaurant, email: e.target.value })}
            />
            <br />
            <input
                type="text"
                placeholder="Restaurant Address"
                value={restaurant.address}
                onChange={(e) => setRestaurant({ ...restaurant, address: e.target.value })}
            />
            <br />
            <input
                type="text"
                placeholder="Restaurant Rating"
                value={restaurant.rating}
                onChange={(e) => setRestaurant({ ...restaurant, rating: e.target.value })}
            />
            <br />
            <button onClick={updateRestaurant}>Update Restaurant</button>
        </div>
    );
}

export default RestaurantUpdate;
