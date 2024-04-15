import { useEffect, useState } from "react"
import Flexbox from "./Flexbox"
import Text from "./Text";

let data:[] = [];

const API = () => {
    const [isData, setIsData] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(()=>{
        let url = 'https://jsonplaceholder.typicode.com/users';
        setIsLoading(true);

        fetch(url)
        .then(res => res.json())
        .then(out =>{
            if(Object.keys(out).length === 0) {
                setIsData(false);
            } else {
                data = out;
            }
            setIsLoading(false);
        })
    },[])

    return(
        <Flexbox className="flex-col">
            {!isLoading ?
                isData ?         
                    data.map((i) => {
                        return(
                            <Flexbox className="justify-between text-center" key={i.id}>
                                <Flexbox>
                                    <Text text={i.name} />
                                    <Text text={i.username} />
                                </Flexbox>
                                <Text text={i.phone} />
                            </Flexbox>
                        )
                    })
                : <Text  text="Error occured" className="md font-semibold text-red-600"/>   
            : <Text text="loading..." className="md font-semibold"/>}
            
        </Flexbox>
    )
}

export default API;