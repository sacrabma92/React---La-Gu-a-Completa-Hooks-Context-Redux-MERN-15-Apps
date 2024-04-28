import { toast } from 'react-toastify'
import { usePatientSotre } from "../store/store"
import { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"

type PatietnsDetailsProps = {
  patient: Patient
}

export default function PatientsDetails({ patient }: PatietnsDetailsProps) {

  const deletePatient = usePatientSotre((state) => state.deletePatient)
  const getPatientById = usePatientSotre((state) => state.getPatientById)

  const handleClick = () => {
    deletePatient(patient.id)
    toast.error('Paciente eliminado con exito')
  }

  return (
    <div className="mx-5 my-10 px-5  py-10 bg-white shadow-md rounded-xl">
      <PatientDetailItem label='ID' data={patient.id} />
      <PatientDetailItem label='Nombre' data={patient.name} />
      <PatientDetailItem label='Propietario' data={patient.caretaker} />
      <PatientDetailItem label='Email' data={patient.email} />
      <PatientDetailItem label='Fecha Alta' data={patient.fecha.toString()} />
      <PatientDetailItem label='Sintomas' data={patient.symptoms} />

      <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-purple-600 hover:bg-purple-700 text-white font-bold uppercase rounded-lg"
          onClick={() => getPatientById(patient.id)}
          >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleClick}
          >
          Eliminar
        </button>
      </div>
    </div>
  )
}
