import React,{ Component } from "react"
import {connect} from 'react-redux'
const stateToPropHOC = propString => mapDispatch => WrappedComponent => {
    const sliceString = new Array()
    const stateString = new Array()
    for(var i = 0;i<propString.length;i++)
    {
        sliceString[i] = propString[i].split('/')[0]
        stateString[i] = propString[i].split('/')[1]
    }
    const mapStateToProp = (state) => {
        const plainObject = {}
        for(var index = 0 ; index < propString.length ; index++)
            plainObject[stateString[index]]=state[sliceString[index]][stateString[index]]

        return plainObject
    }
    class HOC extends Component {
        constructor(props) {
            super(props)
            props[stateString]
        }
        render() {
            return(
                <WrappedComponent {...this.props}></WrappedComponent>
            )
        }
    }
    return connect(mapStateToProp,mapDispatch)(HOC)
}

export default stateToPropHOC