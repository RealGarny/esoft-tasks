import Button from "./components/Button"
import Container from "./components/Container"
import Input from "./components/Input"
import Text from "./components/Text"


function App() {

  return (
    <>
      <Container maxW="lg">
        <div>
          <Text text="herro, Bitches" size="md"/>
          <Input placeholder="hello"/>
          <Button className="bg-primary text-background">Text</Button>
        </div>
      </Container>
    </>
  )
}

export default App
