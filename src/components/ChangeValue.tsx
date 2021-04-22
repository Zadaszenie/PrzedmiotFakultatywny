import React from 'react';

interface ChangeValue {
    charOfButton?: string;
    onNumberChange?: () => void;
}

const ChangeValue:React.FC<ChangeValue> = ({ charOfButton, onNumberChange }) => {

    return (
        <button onClick={onNumberChange}>{charOfButton}</button>
    );
};
export default ChangeValue;