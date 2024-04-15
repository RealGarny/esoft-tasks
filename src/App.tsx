import { useState } from "react"
import Button from "./components/Button"
import Container from "./components/Container"
import Input from "./components/Input"
import Text from "./components/Text"

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
          <Text text="Test" />
      </Container>
    </>
  )
}

export default App
