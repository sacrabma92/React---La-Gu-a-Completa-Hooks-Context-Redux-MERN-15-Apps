import { create } from 'zustand'
import { Patient } from '../types'

type PatientState = {
  patienets: Patient[]
}


export const usePatientSotre = create<PatientState>(() => ({
  patienets: []
}))