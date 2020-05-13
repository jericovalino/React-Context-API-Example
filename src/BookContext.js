import React, {createContext} from 'react'

export const BookContext = createContext("")

export const BookProvider = (props) => {
    const books = [
        { name: "ninja turtles", genre: "cartoons" },
        { name: "croniles of narnia", genre: "adventure" },
      ]

      return(
        <BookContext.Provider value={books}>
            {props.children}
        </BookContext.Provider>
      )
}