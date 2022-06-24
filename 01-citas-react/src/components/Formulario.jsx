import React from 'react'

const Formulario = () => {
  return (
    <div className="w-1/2 lg:w-3/5">
    <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
    <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y {' '}<span className="text-indigo-600 font-bold">Administralos</span></p>
    <form action="" className="bg-white shadow-md rounded-lg py-10 px-5">
      <div className="mb-5">
        <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold" >Nombre Mascota</label>
        <input id="mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Nombre de la mascota" />
      </div>

      <div className="mb-5">
        <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold" >Nombre Propietario</label>
        <input id="propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Nombre del propietario" />
      </div>

      <div className="mb-5">
        <label htmlFor="email" className="block text-gray-700 uppercase font-bold" >Email</label>
        <input id="email" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="email" placeholder="Email contacto propietario" />
      </div>

      <div className="mb-5">
        <label htmlFor="alta" className="block text-gray-700 uppercase font-bold" >Salida</label>
        <input id="alta" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="date" />
      </div>

      <div className="mb-5">
        <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold" >Sintomas</label>
        <textarea id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Describe los sintomas"/>
      </div>

      <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 rounded cursor-pointer transition-colors" value="Agregar Paciente"/>
    </form>
</div>
    )
  }
  
  export default Formulario
