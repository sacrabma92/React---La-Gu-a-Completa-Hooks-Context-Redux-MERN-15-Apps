
const ListadoPacientes = () => {
  return (
    <>
        <div className='md:w-1/2 lg:2/5'>
          <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
          <p className="text-xl mt-5 text-center mb-10">Administra tus {''} <span className="text-indigo-600 font-bold">Pacientes y Citas</span></p>

          <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:{' '}<span className="font-normal normal-case">Juan</span></p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario:{' '}<span className="font-normal normal-case">Carlos Andres</span></p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email:{' '}<span className="font-normal normal-case">correo@correo.com</span></p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Salida:{' '}<span className="font-normal normal-case">10/12/12</span></p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas:{' '}<span className="font-normal normal-case">Tiene gripa</span></p>

          </div>
        </div>
    </>
  )
}

export default ListadoPacientes

