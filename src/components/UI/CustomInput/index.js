import React from 'react';

const input = (props) => {

    let inputElement = null;
    let errorMessage = null;

    if(props.invalid && props.shouldValidate && props.touched) {
        errorMessage = <p>Enter a valid value!</p>
    }


    switch (props.elementType) {
        case ('input'):
            inputElement = <input 
            {...props.elementConfig} 
            value={props.value}
            onChange={props.changed}></input>;
            break;
        case ('password'):
            inputElement = <input 
            {...props.elementConfig} 
            value={props.value}
            onChange={props.changed}></input>;
            break;
        case ('select'):
            inputElement = <select 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}>
                {props.elementConfig.options.map(option => {
                    return <option key={option.value} value={option.value}>{option.displayValue}</option>
                })}
            </select>;
            break;
        default:
            inputElement = <input 
            {...props.elementConfig} 
            value={props.value}
            onChange={props.changed}></input>;
    }


    return (
        <div>
            <label>{props.label}</label>
            {inputElement}
            {errorMessage}
        </div>
    )
    
}

export default input;