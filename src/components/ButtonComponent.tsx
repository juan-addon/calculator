import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props{
    text:string;
    color?:string;
    width?:boolean;
}

export const ButtonComponent = ({text,color = '#2D2D2D', width=false}:Props) => {
    return (

        <TouchableOpacity>
            <View style={{...styles.button,backgroundColor: color, width:(width)?180:80}}>
                <Text style={{...styles.buttonText, color: (color === '#9B9B9B')? 'black': 'white'}}>{text}</Text>
            </View>
        </TouchableOpacity>
      
    )
}
