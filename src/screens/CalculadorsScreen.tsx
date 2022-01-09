import React from 'react'
import {  Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { ButtonComponent } from '../components/ButtonComponent';

export const CalculatorScreen = () => {
    return (
        <View style ={styles.calculatorContainer}>
            <Text style ={styles.smallResult}>1,500.00</Text>
            <Text style ={styles.result}>1,500.00</Text>

            <View style={styles.buttonRow}>
                <ButtonComponent text = "C" color="#9B9B9B" />
                <ButtonComponent text = "+/-" color="#9B9B9B" />
                <ButtonComponent text = "del" color="#9B9B9B" />
                <ButtonComponent text = "/" color="#FF9427" />
            </View>   

             <View style={styles.buttonRow}>
                <ButtonComponent text = "7"  />
                <ButtonComponent text = "8"  />
                <ButtonComponent text = "9"  />
                <ButtonComponent text = "X" color="#FF9427" />
            </View>  

             <View style={styles.buttonRow}>
                <ButtonComponent text = "4"  />
                <ButtonComponent text = "5"  />
                <ButtonComponent text = "6"  />
                <ButtonComponent text = "-" color="#FF9427" />
            </View>  

             <View style={styles.buttonRow}>
                <ButtonComponent text = "1"  />
                <ButtonComponent text = "2"  />
                <ButtonComponent text = "3"  />
                <ButtonComponent text = "+" color="#FF9427" />
            </View>  

            <View style={styles.buttonRow}>
                <ButtonComponent text = "0" width />
                <ButtonComponent text = "."  />
                <ButtonComponent text = "=" color="#FF9427"  />
            </View>     
            
             
                
        </View>
    )
}
