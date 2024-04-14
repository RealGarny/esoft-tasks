import { useState } from "react"
import Button from "./components/Button"
import Container from "./components/Container"
import Input from "./components/Input"
import Text from "./components/Text"
import Box from "./components/Box"
import Flexbox from "./components/Flexbox"
import CompItem from "./components/CompItem"

export interface CompItem {
  id:number,
  text:string,
  percent:string,
  isCompleted: boolean
}

let arrData = [
  {id:0, text:"need to create something", percent:"25", isCompleted:false},
  {id:1, text:"yetagain", percent:"25", isCompleted:true}
];

let filterAscLabel:string = "Asc/Desc";
let filterPercentLabel = ">50/<50";

function App() {

  const [isCompVisible, setIsCompVisible] = useState<boolean>(false);
  const [compList, setCompList] = useState<CompItem[]>(arrData.length < 1 ? [] : arrData);

  const [createCompText, setCreateCompText] = useState<string>("");
  const [createCompPercent, setCreateCompPercent] = useState<string>("");

  const [filterAsc, setFilterAsc] = useState<number>(0); // 0-unassigned, 1-asc, 2-desc
  const [filterPercent, setFilterPercent] = useState<number>(0); // 0-unassigned, 1-asc, 2-desc

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, state:(...args:any)=>void) => {
    e.preventDefault();
    state(e.target.value);
  }

  const addComp = (e: React.FormEvent) => {
    e.preventDefault();
    setCompList(p => [...p, {id:compList.length, text:createCompText, percent:createCompPercent, isCompleted:false}])
    setCreateCompPercent("");
    setCreateCompText("");
  }

  const handleComplete = (id:number) => {
    let compsCopy = compList;
    compsCopy[id] = {...compsCopy[id], isCompleted:!compsCopy[id].isCompleted}
    setCompList([...compsCopy])
  }

  const changeButtonLabel = (actual:number, setState:any, max:number, labels:string[]):string => {
    if(typeof(actual) !== "number" || typeof(actual) !== "number") return "";
    let index:number = actual;

    if(actual < max) {
      index+=1;
    }
    else {
      index = 0;
    }
    setState(index)
    return(labels[index]);
  }

  return (
    <>
      <Container maxW="md">
          <div className="mt-2 px-2 flex flex-col gap-2">
            <Flexbox className="flex-col">
              <Text text="Добавить компетенцию" size="md"/>
              <form className="flex gap-2" onSubmit={addComp}>
                <Input
                  placeholder="Название"
                  onChange={(e)=>{handleChange(e, setCreateCompText)}}
                  value={createCompText}
                />
                <Input
                  placeholder="Процент Освоения"
                  onChange={(e)=>{handleChange(e, setCreateCompPercent)}}
                  value={createCompPercent}
                />
                <Button className="bg-primary text-background">
                  <Text text="Добавить" />
                </Button>
              </form>
            </Flexbox>
            <Button 
              className={`${isCompVisible ? "bg-accent bg-opacity-50 text-text" : "bg-primary text-background"} transition-colors ease-in-out`}
              onClick={()=>{setIsCompVisible(p => !p)}}
            >
              <Text text={isCompVisible ? "Скрыть компетенции" : "Показать компетенции"} />
            </Button>
            { isCompVisible &&
            <Flexbox className="flex-col gap-10">
              <Flexbox>
                <Button
                  onClick={()=>{filterAscLabel = changeButtonLabel(filterAsc, setFilterAsc, 2, ["Asc/Desc", "Asc", "Desc"])}}
                >{filterAscLabel}</Button>
                <Button
                  onClick={()=>{filterPercentLabel = changeButtonLabel(filterPercent, setFilterPercent, 2, [">50/<50", ">50", "<50"])}}
                >{filterPercentLabel}</Button>
                <Button className="bg-primary text-background"><Text text="Поиск"></Text></Button>
              </Flexbox>
              <Flexbox className="flex-col">
              {compList.map((i, index) => {
                return(
                  <CompItem
                    key={i.id}
                    elementIndex = {index}
                    id={i.id}
                    text={i.text}
                    percent={i.percent}
                    isCompleted={i.isCompleted}
                    handleComplete={handleComplete}
                  />
              )})}
              </Flexbox>
            </Flexbox>
            }
          </div>
      </Container>
    </>
  )
}

export default App
