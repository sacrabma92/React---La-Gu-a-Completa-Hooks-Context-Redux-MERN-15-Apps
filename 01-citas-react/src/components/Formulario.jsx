import { useState, useEffect } from 'react';
import Error from './Error'

const Formulario = ({ pacientes, setPacientes, paciente }) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])



  const handleSubmit = (e) => {
    e.preventDefault();

    // Validacion del Formulario
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      console.log('Hay al menos un campo vacion')

      setError(true);
      return;
    }

    setError(false);

    const generarId = () => {
      const random = Math.random().toString(36);
      const fecha = Date.now().toString(36);

      return random + fecha;
    }

    // Objeto de Paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas
    }

    if (paciente.id) {
      // Editando el Registro
      objetoPaciente.id = paciente.id
      
      const pacientesActualizados = pacientes.map( pacienteState => 
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState )

        setPacientes(pacientesActualizados)
        setPacientes({})

    } else {
      // Nuevo registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }


    // Reiniciar el formulario
    setNombre('');
    setEmail('');
    setEmail('');
    setFecha('');
    setSintomas('');
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg font-bold mt-5 text-center mb-10">Añade Pacientes y <span className="text-indigo-600">Administralos</span></p>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        {/* Monstrar error en caso que este vacio */}
        {error && <Error>Todos los campos son obligatorios'</Error>}
        {/* Nombre mascota */}
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">Nombre Mascota</label>
          <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" id="mascota" type="text" placeholder="Nombre de la mascota" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        {/* Nombre propietario */}
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre Propietario</label>
          <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" id="propietario" type="text" placeholder="Nombre del propietario" value={propietario} onChange={(e) => setPropietario(e.target.value)} />
        </div>
        {/* Email */}
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email</label>
          <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" id="email" type="email" placeholder="Correo electronico" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        {/* Alta */}
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">Alta</label>
          <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" id="alta" type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
        </div>
        {/* Observaciones */}
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Sintomas</label>
          <textarea className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" id="sintomas" placeholder="Describe los sintomas" value={sintomas} onChange={(e) => setSintomas(e.target.value)} />
        </div>
        {/* Boton */}
        <input className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'} type="submit" />
      </form>
    </div>
  )
}

export default Formulario
