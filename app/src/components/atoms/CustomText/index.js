import React,{Component} from 'react';
import {Text} from 'react-native';
import styles from './styles.js';
import propTypes from 'prop-types';

class CustomText extends Component {
    render() {
        return(
            <Text style={this.props.style,styles[this.props.type]}>
                {this.props.content}
            </Text>
        );
    }
}

const textType = {
    HEADER:'header',
    PARAGRAPH:'paragraph',
    LABEL:'label',
    ERROR:'error'
}
CustomText.propTypes = {
    content:propTypes.string.isRequired,
    type:propTypes.oneOf(Object.values(textType)),
    style:propTypes.object
}
CustomText.defaultProps = {
    type:textType.LABEL
}

export default CustomText;