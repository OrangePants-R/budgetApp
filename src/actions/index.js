export const types = {
  ADD_ENTRY: 'ADD_ENTRY',
  REMOVE_ENTRY: 'REMOVE_ENTRY',
}

export const addEntryAction = (payload) => ({
  type: types.ADD_ENTRY,
  payload,
})

export const removeEntryAction = (payload) => ({
  type: types.REMOVE_ENTRY,
  payload,
})
