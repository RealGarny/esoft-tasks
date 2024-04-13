import { ContainerProps } from "../interfaces";

const Box = (props: ContainerProps) => {
    return(
    <div className="px-4 py-2 rounded-xl">
        {props.children}
    </div>
)
}

export default Box;