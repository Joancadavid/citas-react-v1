
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    //ALTERNATIVA 1
    const {nombre, departamento, ciudad, id} = paciente 
    //ALTERNATIVA 2
    const {email} = paciente
    const {celular} = paciente
    const {fnacimiento} = paciente
    const {obs} = paciente


    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar este paciente')

        if (respuesta) {
            eliminarPaciente(id)
        }
    }
    
    return(
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre Paciente:{' '}
                <span className="font-normal normal-case">
                {nombre}
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Departamento:{' '}
                <span className="font-normal normal-case">
                {departamento}
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Ciudad:{' '}
                <span className="font-normal normal-case">
                {ciudad}
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email:{' '}
                <span className="font-normal normal-case">
                {email}
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Celular:{' '}
                <span className="font-normal normal-case">
                {celular}
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Nacimiento:{' '}
                <span className="font-normal normal-case">
                {fnacimiento}
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Observaciones:{' '}
                <span className="font-normal normal-case">
                {obs}
                </span>
            </p>

            <div className="flex justify-between mt-10">
            <button onClick={()=>setPaciente(paciente)} type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 font-bold text-white rounded-lg">Editar</button>
            <button onClick={handleEliminar} type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 font-bold text-white rounded-lg">Eliminar</button>
            </div>
            
            

    </div>

    )

}

export default Paciente