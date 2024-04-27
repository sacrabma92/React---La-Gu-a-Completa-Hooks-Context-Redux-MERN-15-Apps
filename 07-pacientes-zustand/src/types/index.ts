
export type Patient = {
  id: string,
  name: string,
  caretaker: string,
  email: string,
  fecha: Date,
  symptoms: string
}

export type DraftPatient = Omit<Patient, 'id'>