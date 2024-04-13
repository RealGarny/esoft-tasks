
interface Iprops { 
    type?: string
    className?: string
    placeholder?: string
}

const Input = (props:Iprops) => {
    return(
        <input
            type={props.type ? props.type : "text"}
            placeholder={props.placeholder && props.placeholder}
            className={`w-full px-4 py-1 border  border-text border-opacity-25 rounded-lg ${props.className}`}
        />
    )
}

export default Input