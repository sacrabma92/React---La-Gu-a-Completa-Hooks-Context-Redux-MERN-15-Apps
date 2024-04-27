import { create } from 'zustand'
import { v4 as uuid4 } from 'uuid'
import { DraftPatient, Patient } from '../types'

type PatientState = {
  patienets: Patient[]
  addPatient: (data: DraftPatient) => void
}

const createPatient = (patient: DraftPatient): Patient => {
  return {...patient, id: uuid4() }
}

export const usePatientSotre = create<PatientState>((set) => ({
  patienets: [],
  addPatient: (data) => {
    const newPatient = createPatient(data)
    set((state) => ({
      patienets: [...state.patienets,  newPatient]
    }))
  }
}))