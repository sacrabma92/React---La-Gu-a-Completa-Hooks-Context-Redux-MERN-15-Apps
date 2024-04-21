import { Activities } from "../types"

export type ActivityActions =
  { type: 'save-activity', payload: { newActivity: Activities } } |
  { type: 'set-activeId', payload: { id: Activities['id'] } } |
  { type: 'delete-activity', payload: { id: Activities['id'] } } |
  { type: 'restart-app' } 

  export type ActivityState = {
    activities: Activities[],
    activeId: Activities['id']
  }

const localStorageActivities = (): Activities[] => {
  const activities = localStorage.getItem('activities')
  return activities ? JSON.parse(activities) : []
}

export const initialState: ActivityState = {
  activities: localStorageActivities(),
  activeId: ''
}

export const activityReducer = (
  state: ActivityState = initialState,
  action: ActivityActions
) => {
  if (action.type === 'save-activity') {
    // Este cofigo maneja la logica para actualizar el state
    let updatedActivities: Activities[] = []
    if (state.activeId) {
      updatedActivities = state.activities.map(activity => activity.id === state.activeId ? action.payload.newActivity : activity)
    } else {
      updatedActivities = [...state.activities, action.payload.newActivity]
    }
    return {
      ...state,
      activities: updatedActivities,
      activeId: ''
    }
  }

  if (action.type === 'set-activeId') {
    return {
      ...state,
      activeId: action.payload.id
    }
  }

  if (action.type === 'delete-activity') {
    return {
      ...state,
      activities: state.activities.filter(activity => activity.id !== action.payload.id)
    }
  }

  if(action.type === 'restart-app'){
    return {
      activities: [],
      activeId: ''
    }
  }
  return state
}