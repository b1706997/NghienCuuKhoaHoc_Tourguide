import * as styles from '_styles';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    label: {
        fontSize:styles.Typography.FONT_SIZE_16,
    },
    error: {
        fontSize:styles.Typography.FONT_SIZE_14,
        color:styles.Colors.WARNING
    },
    header: {
        fontWeight:'bold',
        color:styles.Colors.PRIMARY,
        fontSize:styles.Typography.FONT_SIZE_20
    }
    
});

export default style;