import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import FieldForm from './FieldForm'

describe('<FieldForm/>', () => {

  const newField = {
    type: 'text',
    name: 'aaaa',
    id: '1',
  }

  test('@testing-library/user-event when field is created, callback has correct data', () => {

    render(<FieldForm/>)

    const id = screen.getByPlaceholderText('Enter id')
    const type = screen.getByPlaceholderText('Enter type')
    const name = screen.getByPlaceholderText('Enter name')
    const saveButton = screen.getByTestId('saveButton')

    userEvent.type(id, newField.id)
    userEvent.type(name, newField.name)
    userEvent.click(saveButton)

     expect(id.value).toBe(newField.id)
     expect(type.value).toBe(newField.type)
     expect(name.value).toBe(newField.name)
  })

  test('@testing-library/react when field is created, callback has correct data', () => {

    render(<FieldForm/>)

    const id = screen.getByPlaceholderText('Enter id')
    const type = screen.getByPlaceholderText('Enter type')
    const name = screen.getByPlaceholderText('Enter name')
    const sendButton = screen.getByText('Save')

     fireEvent.change(id, { target: { value: newField.id } })
     fireEvent.change(type, { target: { value: newField.type } })
     fireEvent.change(name, { target: { value: newField.name } })
     fireEvent.click(sendButton)
 
     expect(id.value).toBe(newField.id)
     expect(type.value).toBe(newField.type)
     expect(name.value).toBe(newField.name)
  })
})