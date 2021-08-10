import React from 'react'
import DisplayBalance from './DisplayBalance'
import { Grid, Segment } from 'semantic-ui-react'

const BalanceHeader = () => {
  return (
    <div>
      <DisplayBalance label="Your Balance" value="2,550.53" />
      <Segment textAlign="center">
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance
                size="tiny"
                color="green"
                label="Income:"
                value="1,045.50"
              />
            </Grid.Column>

            <Grid.Column>
              <DisplayBalance
                size="tiny"
                color="red"
                label="Expenses:"
                value="623.50"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  )
}

export default BalanceHeader
