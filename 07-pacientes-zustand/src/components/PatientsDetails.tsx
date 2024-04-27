import { Patient } from "../types"

type PatietnsDetailsProps = {
  patient: Patient
}

export default function PatientsDetails({ patient }: PatietnsDetailsProps) {
  return (
    <div>
      {patient.name}
    </div>
  )
}
