import './App.css'
import axios from 'axios'

const server = axios.create({
  baseURL: 'http://localhost:3001'
})

function App() {
  
  server.get('/usuarios').then((resp) => {
    console.log(resp)
  })


  return (
    <div>
      <h1>Usuários</h1>

    </div>
  )
}

export default App
