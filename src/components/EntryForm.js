import React from 'react'
import { Checkbox, Form, Segment } from 'semantic-ui-react'

const EntryForm = ({
  description,
  setDescription,
  value,
  setValue,
  isExpense,
  setIsExpense,
}) => {
  return (
    <div>
      <Form.Group>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          placeholder="New Shiny Thing"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Form.Input
          width={4}
          label="Value"
          placeholder="100.00"
          icon="dollar"
          iconPosition="left"
          type="number"
          value={value}
          onChange={(e) => {
            console.log(e.target.value)
            setValue(e.target.valueAsNumber || e.target.value)
          }}
        />
      </Form.Group>
      <Segment compact>
        <Checkbox
          toggle
          label={'Is expense'}
          checked={isExpense}
          onChange={() => setIsExpense(!isExpense)}
        />
      </Segment>
    </div>
  )
}

export default EntryForm
