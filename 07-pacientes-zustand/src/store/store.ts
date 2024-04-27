import { create } from 'zustand'
import { DraftPatient, Patient } from '../types'

type PatientState = {
  patienets: Patient[]
  addPatient: (data: DraftPatient) => void
}


export const usePatientSotre = create<PatientState>(() => ({
  patienets: [],
  addPatient: (data) => {
    console.log(data)
  }
}))