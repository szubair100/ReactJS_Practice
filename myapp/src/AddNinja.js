import React, { Component } from 'react'

// Class-Base Container because we are handling states
class AddNinja extends Component {
    state = {
        name: null,
        age: null,
        belt: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    hanldeSubmit = (e) => {
        e.preventDefault();
        this.props.addNinja(this.state);
    }
    render(){
        return (
            <div>
                <form onSubmit={this.hanldeSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" onChange={this.handleChange}/><br/>
                    <label htmlFor="age">Age: </label>
                    <input type="text" id="age" onChange={this.handleChange}/><br/>
                    <label htmlFor="belt">Belt: </label>
                    <input type="text" id="belt" onChange={this.handleChange}/><br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddNinja;