import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import EntryForm from './EntryForm'

const ModalEdit = ({
  setIsOpen,
  isOpen,
  description,
  setDescription,
  value,
  setValue,
  isExpense,
  setIsExpense,
}) => {
  return (
    <>
      <Modal open={isOpen}>
        <Modal.Header>Edit entry</Modal.Header>
        <Modal.Content>
          <Modal.Content>
            <EntryForm
              description={description}
              setDescription={setDescription}
              value={value}
              setValue={setValue}
              isExpense={isExpense}
              setIsExpense={setIsExpense}
            />
          </Modal.Content>
        </Modal.Content>
        <Modal.Actions>
          <Button
            onClick={() => {
              setIsOpen(false)
            }}
          >
            Close
          </Button>
          <Button
            primary
            onClick={() => {
              setIsOpen(false)
            }}
          >
            Ok
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  )
}

export default ModalEdit
