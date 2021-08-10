import React from 'react'
import { Grid, Icon, Segment } from 'semantic-ui-react'

const EntryLine = ({ isExpense = false, description, value }) => {
  return (
    <Segment color={isExpense ? 'red' : 'green'}>
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column width={10}>{description}</Grid.Column>
          <Grid.Column width={3}>{value}</Grid.Column>
          <Grid.Column width={3}>
            <Icon name="edit" bordered />
            <Icon name="trash" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default EntryLine
