

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar este pacient ?');

    if(respuesta){
      eliminarPaciente(id);
    }
  }

  return (
    <div>
      <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        {/* Nombre mascota */}
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:
          <span className="font-normal normal-case"> {nombre}</span>
        </p>
        {/* Nombre Propietario */}
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario:
          <span className="font-normal normal-case"> {propietario}</span>
        </p>
        {/* Email */}
        <p className="font-bold mb-3 text-gray-700 uppercase">Email:
          <span className="font-normal normal-case"> {email}</span>
        </p>
        {/* Fecha de alta */}
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de alta:
          <span className="font-normal normal-case"> {fecha}</span>
        </p>
        {/* Sintomas */}
        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas:
          <span className="font-normal normal-case"> {sintomas}</span>
        </p>

        <div className="flex justify-between mt-10">
          <button onClick={() => setPaciente(paciente)} className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase rounded-lg" type="button">
            Editar
          </button>
          <button onClick={handleEliminar} className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase rounded-lg" type="button">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Paciente
