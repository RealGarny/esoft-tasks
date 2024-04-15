import Text from "./Text"
import Flexbox from "./Flexbox"
import { CompItem  as propsInterface } from "../App"

interface CompProps extends propsInterface {
    elementIndex: number,
    handleComplete: (id:number) => void;
}

const CompItem = (props: CompProps) => {
    if (props.id === undefined || typeof(props.id) !== "number") return

    return(
        <Flexbox key={props.id} className={`${props.isCompleted ? "bg-accept":"bg-secondary"} px-4 py-2 rounded-xl bg-opacity-30 flex hover:bg-opacity-60 justify-between group`}>
            <Flexbox>
            <Text text={props.text + ","} className="font-bold"/>
            <Text text={props.percent + "%"}/>
            </Flexbox>
            <Flexbox className="h-4 md:h-6">
            <img
                src={props.isCompleted ?"x.svg" : "./check.svg"}
                onClick={()=> {props.handleComplete(props.elementIndex)}}
                className="opacity-0 group-hover:opacity-100 cursor-pointer"
            />
            </Flexbox>
        </Flexbox>
    )
}

export default CompItem