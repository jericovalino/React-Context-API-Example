import React from 'react'
// import style from './style.module.css'

const Book = (props) => {
    return(
        <li>
            {props.children}
        </li>
    )
}


export default Book;