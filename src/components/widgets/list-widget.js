import React from 'react'

const ListWidget = ({widget, editing, editingWidget, setEditingWidget, updateWidget, deleteWidget}) => {

  return(
      <>
        {
          editing &&
          <>
            <input type="checkbox"
                   onChange={(event) =>
                       setEditingWidget({
                         ...editingWidget,
                         ordered: !editingWidget.ordered
                       })}
                   checked={editingWidget.ordered}
            /> Ordered
            <br/>
            List Items

            <textarea className="form-control"
                      placeholder="Enter one list item per line"
                      rows={5}
                      onChange={(event) =>
                          setEditingWidget({
                            ...editingWidget,
                            text: event.target.value
                          })}
                      value={editingWidget.text}></textarea>
          </>
        }
        {
          !editing &&
          <>
            {
              widget.ordered &&
              <ol>
                {
                  widget.text.split("\n").map(item => {
                    return (
                        <li>{item}</li>
                    )
                  })
                }
              </ol>
            }
            {
              !widget.ordered &&
              <ul>
                {
                  widget.text.split("\n").map(item => {
                    return (
                        <li>{item}</li>
                    )
                  })
                }
              </ul>
            }
          </>
        }
      </>
  )
}
export default ListWidget