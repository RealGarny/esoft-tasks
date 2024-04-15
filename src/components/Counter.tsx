import { useEffect, useState } from "react"
import Button from "./Button"
import Flexbox from "./Flexbox"
import Input from "./Input"
import Text from "./Text"

const Counter = () => {
    const [counterInput, setCounterInput] = useState("");
    const [counter, setCounter] = useState(0);
    const [isCounter, setIsCounter] = useState(false);

    useEffect(()=>{
        console.log("отработал")
        if(isCounter && counter > 0){
            const handle = setInterval(()=>{
                setCounter(p => p-1)
            }, 1000)
            
            return ()=>{clearInterval(handle)}
        } else {
            return
        }
    } ,[isCounter, counter])

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setCounterInput(e.target.value);
    }

    const handleStart = () => {
        if(counterInput === "" || parseInt(counterInput) <= 0) return;
        setCounter(parseInt(counterInput))
        setIsCounter(true)
    }
 
    return(
        <Flexbox className="flex-col justify-center text-center">
            <Flexbox>
                <Input placeholder="Начало, сек" onChange={handleChange}/>
                <Button className="bg-black text-white w-64" onClick={handleStart}>
                    <Text text="Начать"/>
                </Button>
            </Flexbox>
            <Text size="md" text={`${counter} Секунд`}/>
        </Flexbox>
    )
}

export default Counter;