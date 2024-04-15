interface TProps {
    type?: string,
    text: string,
    url?: string,
    size?: string,
    className?:string
}

const Text = ({type="text", text, url, size="sm", className}:TProps) => {
    let fontSize:string = "";

    switch(size) {
        case "lg": 
            fontSize = "md:text-5xl text-3xl"
            break;
        case "md": 
            fontSize = "md:text-3xl text-2xl"
            break;
        case "sm":
            fontSize = "md:text-sm text-xs"
            break;
    }

    const cssClasses =  `${fontSize} ${className ? className : ""}`;
    return(
        type === "link" 
        ? <a href={url} className={cssClasses}>{text}</a>
        : <p className={cssClasses}>{text}</p>
    )
}

export default Text;