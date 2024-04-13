import { useState } from "react"
import Button from "./components/Button"
import Container from "./components/Container"
import Input from "./components/Input"
import Text from "./components/Text"
import Box from "./components/Box"

interface CompItem {
  id:number,
  text:string,
  percent:string,
}

function App() {

  const [isCompVisible, setIsCompVisible] = useState<boolean>(false);
  const [compList, setCompList] = useState<CompItem[]>([]);

  const [fText, setFText] = useState<string>("");
  const [fPercent, setFPercent] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, state:(...args:any)=>void) => {
    e.preventDefault();
    state(e.target.value);
  }

  const addComp = (e: React.FormEvent) => {
    e.preventDefault();
    compList.push({id:compList.length, text:fText, percent:fPercent})
    setFPercent("");
    setFText("");
  }

  return (
    <>
      <Container maxW="md">
          <div className="mt-2 px-2">
            <div>
              <Text text="Добавить компетенцию" size="md"/>
              <form className="flex gap-2" onSubmit={addComp}>
                <Input
                  placeholder="Название"
                  onChange={(e)=>{handleChange(e, setFText)}}
                  value={fText}
                />
                <Input
                  placeholder="Процент Освоения"
                  onChange={(e)=>{handleChange(e, setFPercent)}}
                  value={fPercent}
                />
                <Button className="bg-primary text-background">
                  <Text text="Добавить" />
                </Button>
              </form>
            </div>
            <Button 
              className={`${isCompVisible ? "bg-secondary bg-opacity-50 text-text" : "bg-primary text-background"} transition-colors ease-in-out`}
              onClick={()=>{setIsCompVisible(p => !p)}}
            >
              <Text text={isCompVisible ? "Скрыть компетенции" : "Показать компетенции"} />
            </Button>
            { isCompVisible &&
            <div>
              {compList.map(i => <Box key={i.id}><Text text={i.text}/>  <Text text={i.percent}/></Box>)}
            </div>
            }
          </div>
      </Container>
    </>
  )
}

export default App
