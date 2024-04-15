import Container from "./components/Container"
import Counter from "./components/Counter"
import Flexbox from "./components/Flexbox"
import Text from "./components/Text"
import API from "./components/API"
import WindowWidth from "./components/WindowWidth"

function App() {

  return (
    <Container maxW="md" className="px-10">
        <Flexbox className="mx-2 flex-col">
          <Flexbox className="mt-10 flex-col gap-4">
            <Text text="Счетчик" size="md" className="font-bold"/>
            <Counter/>
          </Flexbox>
          <Flexbox className="mt-10 flex-col gap-4">
            <Text text="API" size="md" className="font-bold"/>
            <API/>
          </Flexbox>
          <Flexbox className="mt-10 flex-col gap-4">
            <Text text="Ширина окна" size="md" className="font-bold"/>
            <WindowWidth/>
          </Flexbox>
        </Flexbox>
    </Container>
  )
}

export default App
