import React, { Component } from 'react';
import { TouchableOpacity, Text, Pressable,View } from 'react-native';
import styles from './styles.js';
import propTypes from 'prop-types';

class Button extends Component {
  render() {
    return (
        <TouchableOpacity onPress={this.props.onClick} style={styles[this.props.type],styles[this.props.theme],styles[this.props.size]}>
            <Text style={[styles[this.props.size],styles[this.props.type]]}>{this.props.content}</Text>
        </TouchableOpacity>
    );
  }
}
const ButtonType = {
  BUTTON: 'button',
  RESET: 'reset',
  SUBMIT: 'submit',
}
const ButtonTheme = {
  DEFAULT: 'default',
  POSITIVE: 'positive',
  DANGER: 'danger',
}
const ButtonSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
}

Button.propTypes = {
    type: propTypes.oneOf(Object.values(ButtonType)),
    theme: propTypes.oneOf(Object.values(ButtonTheme)),
    size: propTypes.oneOf(Object.values(ButtonSize)),
    onClick: propTypes.func.isRequired,
    content: propTypes.string.isRequired
}

Button.defaultProps = {
    type: ButtonType.BUTTON,
    theme: ButtonTheme.DEFAULT,
    size: ButtonSize.MEDIUM,
}
export default Button;