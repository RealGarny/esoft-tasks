import { useEffect, useState } from "react"
import Button from "./components/Button"
import Container from "./components/Container"
import Input from "./components/Input"
import Text from "./components/Text"
import Flexbox from "./components/Flexbox"
import CompItem from "./components/CompItem"

export interface CompItem {
  id:number,
  text:string,
  percent:number,
  isCompleted: boolean
}

let arrData = [
  {id:0, text:"need to create something", percent:25, isCompleted:false},
  {id:1, text:"yetagain", percent:24, isCompleted:true}
];

let sortIcon:string = "./sort-def.svg";
let filterPercentLabel:string = ">50/<50";

function App() {

  const [isCompVisible, setIsCompVisible] = useState<boolean>(false);
  const [compList, setCompList] = useState<CompItem[]>(arrData.length < 1 ? [] : arrData);

  const [createCompText, setCreateCompText] = useState<string>("");
  const [createCompPercent, setCreateCompPercent] = useState<string>("");

  const [sort, setSort] = useState<number>(0); // 0-unassigned, 1-asc, 2-desc
  const sortIcons:string[] = ["./sort-def.svg", "./sort-ascending.svg", "./sort-descending.svg"];
  const [filterPercent, setFilterPercent] = useState<number>(0); // 0-unassigned, 1->50, 2-<50
  const fPercentLabels:string[]  = [">50/<50", ">50", "<50"]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, state:(...args:any)=>void) => {
    e.preventDefault();
    state(e.target.value);
  }

  const addComp = (e: React.FormEvent) => {
    e.preventDefault();
    arrData.push({id:compList.length, text:createCompText, percent:parseInt(createCompPercent), isCompleted:false})
    setCompList(arrData);
    setCreateCompPercent("");
    setCreateCompText("");
  }

  const handleComplete = (id:number) => {
    let compsCopy = compList;
    compsCopy[id] = {...compsCopy[id], isCompleted:!compsCopy[id].isCompleted}
    setCompList([...compsCopy])
  }

  const strChange = (actual:number, setState:any, labels:string[]):string => {
    if(typeof(actual) !== "number" || typeof(actual) !== "number") return "";
    let index:number = actual;

    if(actual < labels.length - 1) {
      index+=1;
    }
    else {
      index = 0;
    }
    setState(index)
    return(labels[index]);
  }

  const dataSort = (data:CompItem[], type:string):CompItem[] => {
    let dataCopy = [...data];
    if(!type || type === "") return data;
    if(!Array.isArray(data)) return data;

    var i, j, temp;
    var swapped;
    const arrLen = data.length;

    for (i = 0; i < arrLen - 1; i++) 
    {
        swapped = false;
        for (j = 0; j < arrLen - i - 1; j++) 
        {
            if (type.toLocaleLowerCase() === "asc" 
              ? dataCopy[j].percent > dataCopy[j + 1].percent 
              : dataCopy[j].percent < dataCopy[j + 1].percent // :(
            ) 
            {
                temp = dataCopy[j];
                dataCopy[j] = dataCopy[j + 1];
                dataCopy[j + 1] = temp;
                swapped = true;
            }
        }

        if (swapped == false)
        break;
    }
    return dataCopy;
  }

  const handleFilter = () => {
    switch(sort) {
      case 1:
        setCompList([...dataSort(compList, "asc")]); // Life is pain
        break;
      case 2:
        setCompList([...dataSort(compList, "desc")]);
        break;
      default:
        setCompList([...arrData])
    }

    switch(filterPercent) {
      case 1:
        setCompList(p => p.filter((i) => i.percent > 50))
        break;
      case 2:
        setCompList(p => p.filter((i) => i.percent < 50))
        break;
    }
  }
  useEffect(()=>{
    handleFilter();
    console.log("filter")
  },[filterPercent, sort])

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
                  onClick={()=>{sortIcon = strChange(sort, setSort, sortIcons)}}
                  className="bg-accent flex-1 px-2 flex justify-center align-middle"
                ><img src={sortIcon} className="min-w-5 min-h-5 translate-y-1"/></Button>
                <Button
                  onClick={()=>{filterPercentLabel = strChange(filterPercent, setFilterPercent, fPercentLabels)}}
                  className="bg-accent flex-1"
                >{filterPercentLabel}</Button>
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
