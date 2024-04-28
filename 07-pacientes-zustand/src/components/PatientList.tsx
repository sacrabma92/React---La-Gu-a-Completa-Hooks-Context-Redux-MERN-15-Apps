import { usePatientSotre } from "../store/store"
import PatientsDetails from "./PatientsDetails"

export default function PatientList() {

  const patients = usePatientSotre((state) => state.patients)

  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      {patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">Administra tus {''}
            <span className="text-purple-600 font-bold">Pacientes y Citas</span>
          </p>
          {patients.map( patient => (
            <PatientsDetails
              key={patient.id}
              patient={patient}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agragando pacientes {''}
            <span className="text-purple-600 font-bold">y apareceran en este lugar</span>
          </p>
        </>
      )}
    </div>
  )
}
