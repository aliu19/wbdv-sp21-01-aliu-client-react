import React from 'react'

const ParagraphWidget = ({widget, editing, editingWidget, setEditingWidget, updateWidget, deleteWidget}) => {

  return(
      <>
        {
          editing &&
          <>
            <select onChange={(event) =>
                setEditingWidget({
                  ...editingWidget,
                  type: event.target.value
                })}
                    value={editingWidget.type}
                    className="form-control">
              <option value={"HEADING"}>Heading</option>
              <option value={"PARAGRAPH"}>Paragraph</option>
              <option value={"VIDEO"}>Video</option>
              <option value={"IMAGE"}>Image</option>
              <option value={"LINK"}>Link</option>
              <option value={"LIST"}>List</option>
              <option value={"HTML"}>HTML</option>
            </select>
            <br/>
            <textarea className="form-control"
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
            <p>
              {widget.text}
            </p>
          </>
        }
      </>
  )
}
export default ParagraphWidget