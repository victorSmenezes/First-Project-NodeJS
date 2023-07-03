import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const server = axios.create({
  baseURL: 'http://localhost:3001'
})

function App() {
  const [users, setUsers] = useState([])
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

useEffect(() => {
  server.get('/usuarios').then((resp) => {
    console.log(resp.data)
    setUsers(resp.data)
  })
},[])

   function newUser(){
    server.post('/usuarios', {
      age, 
      name,
    }).then((resp) => {
      console.log(resp)
    })
   } 

  return (
    <div>
      <h1>Usuários</h1>
      <ul>
        {users.map((user) => (
          <li key={user.name}>Nome: {user.name} - Idade: {user.age}</li>
        ))
        }
      </ul>

      <h2>Adicionar novos usuários</h2>

      <input onChange={ e => setName(e.target.value)} placeholder='Nome :'/>
      <input onChange={e => setAge(e.target.value)} placeholder='Idade:' />

      <button onClick={newUser}>Adicionar usuário</button>

    </div>
  )
}

export default App
