import React from 'react'
import {  Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { ButtonComponent } from '../components/ButtonComponent';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {

    const { 
        beforeNumber,
        number,
        clean,
        builtNumber,
        positiveOrNegativeNumber,
        btnAdd,
        btnCleanLastNumber,
        btnDivide,
        btnMultiply,
        btnSubtract,
        calculate
    } = useCalculator();

    return (
        <View style ={styles.calculatorContainer}>
            {
                (beforeNumber !== '0') && (
                    <Text style ={styles.smallResult}>{beforeNumber}</Text>
                )
            }
            
            <Text adjustsFontSizeToFit={true} numberOfLines={1} style ={styles.result}>{number}</Text>

            <View style={styles.buttonRow}>
                <ButtonComponent text = "C" color="#9B9B9B" action ={clean} />
                <ButtonComponent text = "+/-" color="#9B9B9B" action ={ positiveOrNegativeNumber } />
                <ButtonComponent text = "del" color="#9B9B9B" action ={btnCleanLastNumber} />
                <ButtonComponent text = "/" color="#FF9427" action ={btnDivide} />
            </View>   

             <View style={styles.buttonRow}>
                <ButtonComponent text = "7" action ={builtNumber} />
                <ButtonComponent text = "8" action ={builtNumber}  />
                <ButtonComponent text = "9" action ={builtNumber} />
                <ButtonComponent text = "X" color="#FF9427" action ={btnMultiply} />
            </View>  

             <View style={styles.buttonRow}>
                <ButtonComponent text = "4" action ={builtNumber} />
                <ButtonComponent text = "5" action ={builtNumber} />
                <ButtonComponent text = "6" action ={builtNumber} />
                <ButtonComponent text = "-" color="#FF9427" action ={btnSubtract} />
            </View>  

             <View style={styles.buttonRow}>
                <ButtonComponent text = "1" action ={builtNumber} />
                <ButtonComponent text = "2" action ={builtNumber} />
                <ButtonComponent text = "3" action ={builtNumber} />
                <ButtonComponent text = "+" color="#FF9427" action ={btnAdd} />
            </View>  

            <View style={styles.buttonRow}>
                <ButtonComponent text = "0" width  action ={builtNumber} />
                <ButtonComponent text = "." action ={builtNumber} />
                <ButtonComponent text = "=" color="#FF9427" action ={calculate}  />
            </View>     
            
        </View>
    )
}
