import React, { useContext } from 'react';
import style from './style.module.css'
import Book from '../book'
import { BookContext } from '../../src/BookContext';

const Books = () => {
    const books = useContext(BookContext);

    return (
        <ul className={style.Books}>
            {books.map(book => {
                return <Book>{book.name}</Book>
            })}
        </ul>
    )
}

export default Books;