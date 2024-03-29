import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const EditableItem = (
    {
      to="/somewhere/to/go",
      deleteItem,
      updateItem,
      item = {_id: "ABC", title: "Some Title"}
    }) => {

  const [editing, setEditing] = useState(false)
  const [cachedItem, setCachedItem] = useState(item)

  return (
      <>
        {
          !editing &&
          <>
            <Link to={to}>
              {item.title}
            </Link>
            <i onClick={() => setEditing(true)} className="fas fa-edit fa-pull-right"></i>
          </>
        }


        {
          editing &&
          <>
            <input
                onChange={(event) =>
                    setCachedItem({
                      ...cachedItem,
                      title: event.target.value
                    })}
                value={cachedItem.title}/>
            <i onClick={() => {
              setEditing(false)
              updateItem(cachedItem)
            }}
               className="fas fa-check fa-pull-right"></i>
            <i onClick={() => {deleteItem(item)}} className="fas fa-times fa-pull-right"></i>
          </>
        }
      </>
  )
}

export default EditableItem