import Login from './Login'
import MainPage from "./MainPage"

const code = new URLSearchParams(window.location.search).get('code')
function App() {

 
  return code ? <MainPage code={code}/> : <Login />
}

export default App
