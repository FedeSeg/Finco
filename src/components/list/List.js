import React, { useState, useRef, useCallback } from 'react';
import useNextPage from '../hooks/useNextPage';
import './assets/List.css'

function List(props) {
  const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  const formatDate = (date) => {
      const month = date.slice(5,7)
      const day = date.slice(8,10)
      return `${day}-${month}`
  }  

  const [offset, setOffset] = useState(0)
  const movementList = useNextPage(offset)

  const observer = useRef()
  const lastElmentRef = useCallback(node => {
      if(observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(entries => {
          if(entries[0].isIntersecting){
              setOffset(offset + 10)
          }
      })
      if(node) observer.current.observe(node)
  })

  return (
    <table className='listTable'>
        <thead className='listHead'>
        <tr>
            <th>Cuenta</th>
            <th>Fecha</th>
            <th>Descripción</th>
            <th>Categoria</th>
            <th>Monto</th>
        </tr>
        </thead>
        <tbody>
            {movementList.map((item, index) => {
                if (movementList.length === (index + 1)) {
                    return (
                        <tr ref={lastElmentRef} key={index} className='row'>
                        <td>{item.account.name}</td>
                        <td>{formatDate(item.date)}</td>
                        <td>{item.description}</td>
                        <td>{item.concepts[0].category.name}</td>
                        <td>${toThousand(item.amount)}</td>   
                    </tr>
                    )
                } else {
                    return (
                        <tr key={index} className='row'>
                            <td >{item.account.name}</td>
                            <td >{formatDate(item.date)}</td>
                            <td>{item.description}</td>
                            <td >{item.concepts[0].category.name}</td>
                            <td>${toThousand(item.amount)}</td>   
                        </tr>
                    )
                }
            })}
        </tbody>
    </table>

  )
}

export default List;