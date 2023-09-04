import random from 'randomstring-ng'

function App() {

  return (
    <>
      <h1>{random.generate()}</h1>
    </>
  )
}

export default App
