import React, { Component } from 'react';

// add input change handle to a form
const FormHOC = state => submitFunction => WrappedForm => {
    return class HOC extends Component {
        constructor(props) {
            super(props)
            console.log(props)
            this.state = state
        }
        handleInputChange = (type,value) => {
            this.setState({[type]:value})
        }
        handleFormSubmit = () => {
            submitFunction()
        }
        render() {
            return(
                <WrappedForm {...this.props} {...this.state} onChange={this.handleInputChange}/>
            )
        }
    }
}

export default FormHOC