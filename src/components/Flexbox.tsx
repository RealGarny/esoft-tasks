import { ContainerProps } from "../interfaces"

const Flexbox = (props:ContainerProps) => {
    return(
    <div className={`flex gap-2 ${props.className}`}>
        {props.children}
    </div>
    )
}

export default Flexbox 