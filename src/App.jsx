import { useEffect } from 'react'
import './App.css'
import { getUsuarios } from './helpers/getUsuarios'
import { useState } from 'react'
import { MostrarUsuarios } from './components/MostrarUsuarios'

function App() {
  const [usuario, setUsuarios] = useState()
  const [filterPais, setfilterPais] = useState("")
  useEffect(() => {
    getUsuarios().then(res => setUsuarios(res.results))
  }, [])

  const usuarioFilter = () => {
    if (filterPais !== null && filterPais.length > 0) {
      return usuario.filter(usu => usu.location.country.toLowerCase().includes(filterPais.toLowerCase()))
    } else {
      return usuario
    }
    //return filterPais !== null && filterPais.length > 0 ? 
    //usuario.filter(user => user.location.country.toLowerCase().include(filterPais.//toLowerCase())) : usuario
  }
  const eliminarUsuario = (email) => {
    const usuarioEliminado = usuario.filter(usu => usu.email !== email)
    setUsuarios(usuarioEliminado)
  }

  const abrirModal = () => {
    setModal(true)
  }

  return (
    <div>
      <h1>REPASO REACT CERTUS :D</h1>
      <div>
        <input type="text"
          placeholder='Busqueda por pais'
          onChange={(e) => setfilterPais(e.target.value)} />
      </div>
      <MostrarUsuarios
        usuario={usuarioFilter()}
        eliminarUsuario={eliminarUsuario}
        abrirModal={abrirModal}
      />

     
   

    </div>
  )
}

export default App
