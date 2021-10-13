import { types } from '../actions'

export const initialEntries = [
  {
    id: 1,
    description: 'Work Income',
    value: 1000.0,
    isExpense: false,
  },
  {
    id: 2,
    description: 'Water Bill',
    value: 20.0,
    isExpense: true,
  },
  {
    id: 3,
    description: 'Power Bill',
    value: 100.0,
    isExpense: true,
  },
  {
    id: 4,
    description: 'Rent',
    value: 300.0,
    isExpense: true,
  },
]

const entriesReducer = (state = initialEntries, action) => {
  switch (action.type) {
    case types.ADD_ENTRY:
      return state.concat({ ...action.payload })
    case types.REMOVE_ENTRY:
      return state.filter((entry) => entry.id !== action.payload)
    default:
      return state
  }
}

export default entriesReducer
