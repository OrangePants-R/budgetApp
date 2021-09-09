import React from 'react'
import DisplayBalance from './DisplayBalance'
import { Grid, Segment } from 'semantic-ui-react'

const BalanceHeader = ({ incomeTotal, expenseTotal }) => {
  return (
    <div>
      <DisplayBalance
        label="Your Balance"
        value={`$${incomeTotal - expenseTotal}`}
      />
      <Segment textAlign="center">
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance
                size="tiny"
                color="green"
                label="Income:"
                value={`$${incomeTotal}`}
              />
            </Grid.Column>

            <Grid.Column>
              <DisplayBalance
                size="tiny"
                color="red"
                label="Expenses:"
                value={`$${expenseTotal}`}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  )
}

export default BalanceHeader
