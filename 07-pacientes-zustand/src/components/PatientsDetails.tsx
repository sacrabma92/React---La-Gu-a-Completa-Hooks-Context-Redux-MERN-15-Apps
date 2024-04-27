import { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"

type PatietnsDetailsProps = {
  patient: Patient
}

export default function PatientsDetails({ patient }: PatietnsDetailsProps) {
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailItem label='ID' data={patient.id} />
      <PatientDetailItem label='Nombre' data={patient.name} />
      <PatientDetailItem label='Propietario' data={patient.caretaker} />
      <PatientDetailItem label='Email' data={patient.email} />
      <PatientDetailItem label='Fecha Alta' data={patient.fecha.toString()} />
      <PatientDetailItem label='Sintomas' data={patient.symptoms} />
    </div>
  )
}
