import { useState, useEffect } from "react"
import Error from "./Error"


const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

    const [nombre, setNombre] = useState ('')
    const [departamento, setDepartamento] = useState ('')
    const [ciudad, setCiudad] = useState ('')
    const [email, setEmail] = useState ('')
    const [celular, setCelular] = useState ('')
    const [fnacimiento, setNacimiento] = useState ('')
    const [obs, setObs] = useState ('')
    const [error, setError] = useState(false)

    useEffect(() => {
        if(Object.keys(pacientes).length > 0){
            setNombre (paciente.nombre)
            setDepartamento(paciente.departamento)
            setCiudad(paciente.ciudad)
            setEmail(paciente.email)
            setCelular(paciente.celular)
            setNacimiento(paciente.fnacimiento)
            setObs(paciente.obs)
        }
        
    }, [paciente])


    const generarId = () => {

        const fecha = Date.now().toString(36)
        const random = Math.random().toString(36).substring(2)
        
        return fecha + random
    }

    const handleSubmit = (e) => {
        
        e.preventDefault()
        //VALIDACION DEL FORMULARIO

        if ([nombre, departamento, ciudad, email, celular, fnacimiento, obs].includes('')){ 
            setError(true) 
        }
        else{
            setError(false)
            const objetoPaciente = {
                nombre,
                departamento,
                ciudad,
                email,
                celular,
                fnacimiento,
                obs
                
            }

            if (paciente.id) {
                //editando registro
                objetoPaciente.id = paciente.id
                
                const pacientesActualizados = pacientes.map( pacientesState => pacientesState.id === paciente.id ? objetoPaciente : pacientesState)

                setPacientes(pacientesActualizados) 
                setPaciente({})

            }else{
                // Nuevo Registro
                objetoPaciente.id = generarId()
                setPacientes([...pacientes, objetoPaciente])


            }


            //REALIZAR COPIA DEL ARREGLO Y AGREGARLE LO NUEVO
            
            //REINICIAR EL FORMULARIO
            setNombre('')
            setDepartamento('')
            setCiudad('')
            setEmail('')
            setCelular('')
            setNacimiento('')
            setObs('')

        }
    }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-2xl text-center">Seguimiento pacientes</h2>

        <p className="text-xl mt-5 text-center mb-10">
            Añade Pacientes y <span className="text-indigo-600 font-bold"> Administralos</span>    
        </p>

        <form action="" onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        
            {error && <Error mensaje='Todos los campos son obligatorios'/>}

            <div className="mb-5">
                <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">Nombre Paciente</label>
                <input value={nombre} onChange={ (e) => setNombre(e.target.value) } id="nombre" type="text" placeholder="Nombre Paciente" className="rounded-md border-2 w-full p-2 mt-2 placeholder-grey-400"/>
            </div>

            <div className="mb-5">
                <label htmlFor="departamento" className="block text-gray-700 uppercase font-bold"> Departamento</label>
                <input value={departamento} onChange={ (e) => setDepartamento(e.target.value) } id="departamento" type="text" placeholder="Departamento" className="rounded-md border-2 w-full p-2 mt-2 placeholder-grey-400"/>
            </div>

            <div className="mb-5">
                <label htmlFor="ciudad" className="block text-gray-700 uppercase font-bold"> Ciudad</label>
                <input value={ciudad} onChange={ (e) => setCiudad(e.target.value) } id="ciudad" type="text" placeholder="Ciudad" className="rounded-md border-2 w-full p-2 mt-2 placeholder-grey-400"/>
            </div>

            <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
                <input value={email} onChange={ (e) => setEmail(e.target.value) } id="email" type="email" placeholder="Email Paciente" className="rounded-md border-2 w-full p-2 mt-2 placeholder-grey-400"/>
            </div>

            <div className="mb-5">
                <label htmlFor="celular" className="block text-gray-700 uppercase font-bold">Celular</label>
                <input value={celular} onChange={ (e) => setCelular(e.target.value) } id="celular" type="number" placeholder="Celular Paciente" className="rounded-md border-2 w-full p-2 mt-2 placeholder-grey-400"/>
            </div>

            <div className="mb-5">
                <label htmlFor="fnacimiento" className="block text-gray-700 uppercase font-bold">Fecha Nacimiento</label>
                <input value={fnacimiento} onChange={ (e) => setNacimiento(e.target.value) } id="fnacimiento" type="date" className="rounded-md border-2 w-full p-2 mt-2"/>
            </div>

            <div className="mb-5">
                <label htmlFor="observaciones" className="block text-gray-700 uppercase font-bold">Observaciones</label>
                <textarea value={obs} onChange={ (e) => setObs(e.target.value) } id="observaciones" type="textarea" className="rounded-md border-2 w-full p-2 mt-2"/>
            </div>

            <input type="submit" value={paciente.id ? 'Editar Paciente':'Agregar Paciente' } className="cursor-pointer bg-indigo-500 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 transition-colors"/>

        </form>

    </div>
  )
}

export default Formulario
