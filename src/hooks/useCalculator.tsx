import { useRef, useState } from 'react'

enum Operators{
    add, subtract, multiply, divide
}

export const useCalculator = () => {

    const [beforeNumber, setBeforeNumber] = useState('0');
    const [number, setNumber] = useState('0');

    const LastOperation = useRef<Operators>()

    const clean = ()=>{
        setNumber('0');
        setBeforeNumber('0');
    }

    const builtNumber = (textNumber:string) => {
        
        if( number.includes('.') && textNumber === '.') return;

        if(number.startsWith('0') || number.startsWith('-0')){

            //decimal
            if(textNumber === '.' ){
                setNumber(number + textNumber);
            }else if(textNumber === '0' && number.includes('.') ){
                setNumber(number + textNumber);
            }else if( textNumber !== '0' && !number.includes('.')){
                setNumber(textNumber);
                //avoid 0000.000
            }else if( textNumber === '0' && !number.includes('.')){
                setNumber(number);
            }else{
                setNumber(number + textNumber);
            }

        }else{
            setNumber(number + textNumber);
        }
    }

    const positiveOrNegativeNumber = () => {
       if(number.includes('-')){
           setNumber (number.replace('-',''));
       }else{
           setNumber('-'+ number);
       }

    }

    const btnCleanLastNumber = () =>{

        let negative = '';
        let tempNumber = number;
        if( number.includes('-')){
            negative = '-';
            tempNumber = number.substring(1);
        }

        if( tempNumber.length > 1){
            setNumber (negative + tempNumber.slice(0,-1));
        }else{
            setNumber('0');
        }


        /*
        if(number.length == 1){
            setNumber('0')
        }else{
            if(number.substring(0,number.length -1) == '-'){
                setNumber('0')
            }else{
                setNumber(number.substring(0,number.length -1))
            }
        }*/
        
        
    }

    const setBeforeNumberAction = () => {
        if(number.endsWith('.') ){
            setBeforeNumber(number.slice(0,-1));
        }else{
            setBeforeNumber( number );
        }
        setNumber('0');

    }

    const btnDivide =() => {
        setBeforeNumberAction();
        LastOperation.current = Operators.divide;
    }

    const btnMultiply =() => {
        setBeforeNumberAction();
        LastOperation.current = Operators.multiply;
    }

    const btnSubtract =() => {
        setBeforeNumberAction();
        LastOperation.current = Operators.subtract;
    }

    const btnAdd =() => {
        setBeforeNumberAction();
        LastOperation.current = Operators.add;
    }

    const calculate = () => {
        const firstNumber = Number (number);
        const secondNumber = Number (beforeNumber);

        switch (LastOperation.current) {
            case Operators.add:
                setNumber(`${firstNumber + secondNumber}`);
            break;
            case Operators.subtract:
                setNumber(`${secondNumber - firstNumber}`);
            break;
            case Operators.multiply:
                setNumber(`${firstNumber * secondNumber}`);
            break;

            case Operators.divide:
                setNumber(`${secondNumber / firstNumber}`);
            break;
        }

        setBeforeNumber('0');
    }

    return {
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
    }
}

