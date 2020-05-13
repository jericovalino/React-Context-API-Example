import React from 'react';
import style from '../src/pages-styles/index.module.css'
import {BookProvider} from '../src/BookContext'
import Books from '../components/books'

const Index = () => {

  return (
    <div className={style.Index}>
      <h1>ContextAPI Example</h1>
      <h2>BOOK LIST</h2>

      <BookProvider>
        <Books />
      </BookProvider>
    </div>
  )
}

export default Index;