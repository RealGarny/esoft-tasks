import { HTMLInputTypeAttribute } from "react";

interface Iprops { 
    type?: HTMLInputTypeAttribute ,
    name?: string,
    className?: string,
    placeholder?: string,
    onChange?: (...args:any) => void
    value?: string,
}

const Input = (props:Iprops) => {
    return(
        <input
            type={props.type ? props.type : "text"}
            placeholder={props.placeholder && props.placeholder}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            className={`w-full px-4 py-1 border  border-text border-opacity-25 rounded-lg ${props.className}`}
        />
    )
}

export default Input