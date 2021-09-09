import './App.css'
import React, { useState, useEffect } from 'react'
import { Container } from 'semantic-ui-react'
import MainHeader from './components/MainHeader'
import NewEntryForm from './components/NewEntryForm'
import BalanceHeader from './components/BalanceHeader'
import EntryLines from './components/EntryLines'
import ModalEdit from './components/ModalEdit'

const App = () => {
  const [description, setDescription] = useState('')
  const [value, setValue] = useState(0.0)
  const [isExpense, setIsExpense] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [entries, setEntries] = useState(initialEntries)
  const [entryId, setEntryId] = useState()
  const [expenseTotal, setExpenseTotal] = useState(0)
  const [incomeTotal, setIncomeTotal] = useState(0)

  useEffect(() => {
    console.log(`value: ${value}`)
  }, [value])

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId)
      const newEntries = [...entries]
      newEntries[index].description = description
      newEntries[index].value = value
      newEntries[index].isExpense = isExpense
      setEntries(newEntries)
      resetEntry()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  useEffect(() => {
    let totalIncome = 0
    let totalExpense = 0
    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpense += entry.value)
      } else {
        return (totalIncome += entry.value)
      }
    })
    setExpenseTotal(totalExpense)
    setIncomeTotal(totalIncome)
  }, [entries])

  const deleteEntry = (id) => {
    const result = entries.filter((entry) => entry.id !== id)
    setEntries(result)
  }

  const editEntry = (id) => {
    id && setIsOpen(true)
    const index = entries.findIndex((entry) => entry.id === id)
    const entry = entries[index]
    setEntryId(id)
    setDescription(entry.description)
    setValue(entry.value)
    setIsExpense(entry.isExpense)
    setIsOpen(true)
  }

  const resetEntry = () => {
    setDescription('')
    setValue(0)
    setIsExpense(true)
  }

  const addEntry = () => {
    const result = [
      ...entries,
      { id: entries.length + 1, description, value: value, isExpense },
    ]
    setEntries(result)
    resetEntry()
  }

  return (
    <Container>
      <MainHeader title="Budget" />
      <BalanceHeader expenseTotal={expenseTotal} incomeTotal={incomeTotal} />
      <MainHeader type="h3" title="History" />

      <EntryLines
        entries={entries}
        deleteEntry={deleteEntry}
        editEntry={editEntry}
      />

      <MainHeader type="h3" title="Add New Transaction" />
      <NewEntryForm
        addEntry={addEntry}
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
    </Container>
  )
}

export default App

var initialEntries = [
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
