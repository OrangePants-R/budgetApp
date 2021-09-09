import React from 'react'
import EntryLine from './EntryLine'

const EntryLines = ({ entries, deleteEntry, editEntry }) => {
  return entries.map((entry) => (
    <EntryLine
      entry={entry}
      key={entry.id}
      deleteEntry={deleteEntry}
      editEntry={editEntry}
    />
  ))
}

export default EntryLines
