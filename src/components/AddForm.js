import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf, setError } from "../actions"

const mapStateToProps = (state)=> {
    return {
        name: state.name,
        position: state.position,
        nickname: state.nickname,
        description: state.description,
        errorMessage: state.errorMessage
    }
}

const initialValues = {
    name:"",
    position:"",
    nickname:"",
    description:""
}

const AddForm = (props) => {
    const [state, setState] = useState(initialValues);

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (state.name === "" || state.position === "" || state.nickname === "") {
//3. Within the handleSubmit function, replace the static assignment to errorMessage with a call to the setError action. Test that an error is displayed when this validation code fails.
            props.setError("Name, position and nickname fields are required.");
        } else {
            props.setError("");
            setState(initialValues);
            return( 
//4. Within the handleSubmit function, call your addSmurf action with the smurf name, position, nickname and summury passed as arguments. Test that a smurf is correctly added to when the form is submitted.
                props.addSmurf({
                    name: state.name,
                    position: state.position,
                    nickname: state.nickname,
                    description: state.description,
                }));
        }
    }

    // const errorMessage = "";

    return(<section>
        <h2>Add Smurf</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label><br/>
                <input onChange={handleChange} value={state.name} name="name" id="name" />
            </div>
            <div className="form-group">
                <label htmlFor="position">Position:</label><br/>
                <input onChange={handleChange} value={state.position} name="position" id="position" />
            </div>
            <div className="form-group">
                <label htmlFor="nickname">Nickname:</label><br/>
                <input onChange={handleChange} value={state.nickname} name="nickname" id="nickname" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label><br/>
                <textarea onChange={handleChange} value={state.description} name="description" id="description" />
            </div>
            {
//2. Replace all instances of the errorMessage static variable with your error message state value.                 
            props.errorMessage && <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {props.errorMessage}</div>
            }
            <button>Submit Smurf</button>
        </form>
    </section>);
}
//1. Connect the errorMessage, setError and addSmurf actions to the AddForm component.
export default connect(mapStateToProps, { addSmurf, setError })(AddForm);