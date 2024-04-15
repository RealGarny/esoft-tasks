import { useEffect, useState } from "react"
import Flexbox from "./Flexbox"
import Text from "./Text"

const WindowWidth = () => {
    const getWindowSize = () => {
        return window.innerWidth;
    }

    const [windowW, setWindowW] = useState(getWindowSize());

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowW(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
        window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return(
        <Flexbox className="text-center justify-center bg-black py-2 rounded-xl">
            <Text size="md" className="font-semibold text-white" text={`${windowW}px`}/>
        </Flexbox>
    )
}

export default WindowWidth