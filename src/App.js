import './App.css'
import React from 'react'
import { Container } from 'semantic-ui-react'
import MainHeader from './components/MainHeader'
import NewEntryForm from './components/NewEntryForm'
import BalanceHeader from './components/BalanceHeader'
import EntryLine from './components/EntryLine'

const App = () => {
  return (
    <Container>
      <MainHeader title="Budget" />
      <BalanceHeader />
      <MainHeader type="h3" title="History" />

      <EntryLine description="Something" isExpense={true} value="$10.00" />
      <EntryLine
        description="Something Else"
        isExpense={false}
        value="$100.00"
      />
      <EntryLine description="Another Thing" isExpense={true} value="$50.00" />

      <MainHeader type="h3" title="Add New Transaction" />
      <NewEntryForm />
    </Container>
  )
}

export default App
