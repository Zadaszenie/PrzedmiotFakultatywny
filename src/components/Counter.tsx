import React from 'react';
import ChangeValue from './ChangeValue';
interface CounterProps {
    initialNumber?: number;
    onNumberChange?: (someNumber: number) => void;
}

const Counter:React.FC<CounterProps> = ({initialNumber, onNumberChange}) => {
    const [counterNumber, setCounterNumber] = React.useState(initialNumber || 0);

    const obj = {a: 1, b: 2};
    //const {a, b} = obj;

    const addNumber = () => {
        const number = counterNumber + 1;
        setCounterNumber(number);
        onNumberChange && onNumberChange(number);
        
    }
    const decreaseNumber = () => {
        const number = counterNumber - 1;
        setCounterNumber(number);
        onNumberChange && onNumberChange(number);
    }
    const setNumber = () => {
        const number = 0;
        setCounterNumber(number);
        onNumberChange && onNumberChange(number);
    }
    

    return (
        <div>
            <ChangeValue onNumberChange={addNumber} charOfButton={'+'}/>
            <ChangeValue onNumberChange={decreaseNumber} charOfButton={'-'}/>
            <br></br>
            {counterNumber}
            <br></br>
            <button onClick={setNumber}>wartosc poczatkowa</button>
        </div>
    );
};
export default Counter;