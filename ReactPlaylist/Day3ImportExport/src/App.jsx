// import for sinple component 

// import Login from "./Login"

// import for multiple component ( 1 file madhe multiple component asel teva)
import Login,{Profile,Setting} from "./Login"

function App() {
  return (
    <div>
      <h1>Importing and Exporting Component</h1>
      <Login/>
      <Profile/>
      <Setting/>
    </div>
     
  )
}

export default App
