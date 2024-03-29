import React from 'react'

const HeadingWidget = ({widget, editing, editingWidget, setEditingWidget, updateWidget, deleteWidget}) => {

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
            <input
                className="form-control"
                onChange={(event) =>
                    setEditingWidget({
                      ...editingWidget,
                      text: event.target.value
                    })}
                value={editingWidget.text}
            />
            <br/>
            <select onChange={(event) =>
                setEditingWidget({
                  ...editingWidget,
                  size: parseInt(event.target.value)
                })}
                    value={editingWidget.size}
                    className="form-control">
              <option value={1}>Heading 1</option>
              <option value={2}>Heading 2</option>
              <option value={3}>Heading 3</option>
              <option value={4}>Heading 4</option>
              <option value={5}>Heading 5</option>
              <option value={6}>Heading 6</option>
            </select>
          </>
        }
        {
          !editing &&
          <>
            {widget.size === 1 && <h1>{widget.text}</h1>}
            {widget.size === 2 && <h2>{widget.text}</h2>}
            {widget.size === 3 && <h3>{widget.text}</h3>}
            {widget.size === 4 && <h4>{widget.text}</h4>}
            {widget.size === 5 && <h5>{widget.text}</h5>}
            {widget.size === 6 && <h6>{widget.text}</h6>}
          </>
        }
      </>
  )
}
export default HeadingWidget