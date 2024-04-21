import { Activities } from "../types"

export type ActivityActions =
  { type: 'save-activity', payload: { newActivity: Activities } } 

type ActivityState = {
  activities: Activities[]
}

export const initialState: ActivityState = {
  activities: []
}

export const activityReducer = (
  state: ActivityState = initialState,
  action: ActivityActions
) => {
  if(action.type === 'save-activity'){
    // Este cofigo maneja la logica para actualizar el state
    return {
      ...state,
      activities: [...state.activities, action.payload.newActivity]
    }
  }

  return state
}