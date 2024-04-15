import { ContainerProps } from "../interfaces";

interface CProps extends ContainerProps {
    maxW?: string;
}

const Container = (props:CProps) => {
    let maxW;

    switch(props.maxW) {
        case "sm":
            maxW = "max-w-md"
            break;
        case "md":
            maxW = "max-w-2xl"
            break;
        case "lg":
            maxW = "max-w-4xl"
            break;
        case "full":
            maxW = "max-w-full"
            break;
        default:
            maxW = "";
    }

    return(
        <div className={`${maxW} mx-auto`}>
            {props.children}
        </div>
    )
}

export default Container