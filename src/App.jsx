//PARA CREAR EL SERVIDOR SE INICIALIZA CON CD (CARPETA DESTINO EJEMPLO: CD DESKTOP)
//Y LUEGO SE EJECUTA npm init vite@lastest
//LUEGO SE EJECUTA npm install para crear los paquetes
///////////////////////PARA EJECUTAR EL SERVIDOR SE INICIALIZA CON "npm run dev"//////////////////////////
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import { useState, useEffect } from "react"

function App() {

  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] = useState({});

 
  useEffect(() => {
      localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  }, [pacientes])

  const eliminarPaciente = (id) =>{
        const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
        console.log(pacientesActualizados)

  }

  return (
    
    <div className="container mx-auto mt-2">
      <Header 
      
      /> 

      <div className="mt-12 md:flex">
        <Formulario

          pacientes = {pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        /> 

        <ListadoPacientes
        
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}

        />

       


      </div>

    </div>
    
  )
}

export default App
