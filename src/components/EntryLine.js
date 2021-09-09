import React from 'react'
import { Grid, Icon, Segment } from 'semantic-ui-react'

const EntryLine = ({ entry, deleteEntry, editEntry }) => {
  const { isExpense, description, value, id } = entry
  return (
    <>
      <Segment color={isExpense ? 'red' : 'green'}>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={10}>{description}</Grid.Column>
            <Grid.Column width={3}>{`$${value}`}</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" onClick={() => editEntry(id)} bordered />
              <Icon name="trash" onClick={() => deleteEntry(id)} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  )
}

export default EntryLine
