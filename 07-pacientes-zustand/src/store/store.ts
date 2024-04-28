import { create } from 'zustand'
import { v4 as uuid4 } from 'uuid'
import { DraftPatient, Patient } from '../types'

type PatientState = {
  patienets: Patient[]
  activeId: Patient['id']
  addPatient: (data: DraftPatient) => void
  deletePatient: (id: Patient['id']) => void
  getPatientById: (id: Patient['id']) => void
}

const createPatient = (patient: DraftPatient): Patient => {
  return { ...patient, id: uuid4() }
}

export const usePatientSotre = create<PatientState>((set) => ({
  patienets: [],
  activeId: '',
  addPatient: (data) => {
    const newPatient = createPatient(data)
    set((state) => ({
      patienets: [...state.patienets, newPatient]
    }))
  },
  deletePatient: (id) => {
    set((state) => ({
      patienets: state.patienets.filter(patient => patient.id != id)
    }))
  },
  getPatientById: (id) => {
    set(() => ({
      activeId: id
    }))
  }
}))