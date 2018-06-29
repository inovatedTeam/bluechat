
import React from 'react';
import { Text, View, TextInput } from 'react-native';


const Input = ({ label, text, onChangeText, placeholder, secureTextEntry }) => {
    const { containerStyle, textStyle, inputStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text style={textStyle}>{label}</Text>
			<TextInput
				placeholder={placeholder}
				secureTextEntry={secureTextEntry}
				autoCorrect={false}
				style={inputStyle}
				value={text}
				onChangeText={onChangeText}
			 />    
        </View>
    ); 
};

const styles  = {
	textStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1
	},
	inputStyle: {
		fontSize: 18,
		lineHeight: 23,
		paddingRight: 5,
		paddingLeft: 5,
		color: '#000',
		flex: 3
	},
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
};

export { Input };