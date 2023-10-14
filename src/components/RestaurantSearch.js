import React, { Component } from 'react';
import { Table, Form,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import NavBarManu from './NavBarManu';


class RestaurantSearch extends Component {
    constructor() {
        super()
        this.state = {
            search: '',
            searchData: [],
            noData: false,
            lastsearch:"",
        }
    }
    search(key) {
        console.warn(key);
        fetch(`http://localhost:3000/restaurant?q=${key}`)
            .then((data) => {
                if (data.ok) {
                    data.json().then((resp) => {
                        if (resp.length > 0) {
                            this.setState({ searchData: resp, noData: false, lastsearch: key });
                        } else {
                            this.setState({ noData: true, searchData: [], lastsearch: key });
                        }
                    });
                } else {
                    this.setState({ noData: true, searchData: [], lastsearch: key });
                }
            })
            .catch((error) => {
                console.error("Network error:", error);
                this.setState({ noData: true, searchData: [], lastsearch: key });
            });
    }

    delete(id) {
        fetch(`http://localhost:3000/restaurant/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((result) => {
            if (result.ok) {
                alert("Restaurant Has Been Deleted");
                this.search(this.state.lastsearch)
            }
        });
    }


    render() {
        return (
            <Container>
                <h1>RestaurantSearch</h1>
                <NavBarManu />
                <Form.Control type="text" onChange={(event) => this.search(event.target.value)} placeholder="Search Restaurant" />
                <div>
                    {this.state.noData ? (
                        <p>No data found</p>
                    ) : (
                        this.state.searchData ? (
                                <div>
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Rating</th>
                                                <th>Location</th>
                                                <th>Operation</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                {this.state.searchData.map((item) =>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.rating}</td>
                                        <td>{item.address}</td>
                                        <td><Link to={"/update/" + item.id}><FontAwesomeIcon icon={faEdit} color="black" /></Link> <br></br>
                                            <span onClick={() => this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="red" /></span>
                                        </td>
                                    </tr>
                                            )}
                                        </tbody>
                                    </Table>
                            </div>
                        ) : (
                            <p>Loading...</p>
                        )
                    )}
                </div>
            </Container>
        );
    }
}

export default RestaurantSearch;
