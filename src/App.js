import React from 'react'
import TestComponent from '@components/TestComponent'

function App (props) {
  return (
    <div className='App'>
      <h1 style={{ color: 'red' }}> Проект запущен :) </h1>
      {/*    TODO: сюда добавляем дочерние компоненты приложения */}
      <TestComponent />
    </div>
  )
}

export default App
