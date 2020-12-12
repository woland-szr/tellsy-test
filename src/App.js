import React from 'react'
import { useSelector } from 'react-redux'
import { Form } from './components/Form';
import { Header } from './components/Header';
import { List } from './components/List';

export const App = () => {

  const form = useSelector(state => state.form)
  
  return (
    <div className='container'>
      <Header />
      {form ? <Form /> : null}
      <List />
    </div>
  )
}
