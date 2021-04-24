import React, {useState} from 'react'

const ParagraphWidget = ({widget, updateWidget, deleteWidget}) => {
  const [editingWidget, setEditingWidget] = useState({})

  return(
      <>
        {
          editingWidget.id === widget.id &&
          <>
            <i onClick={() => {
              updateWidget(widget.id, editingWidget)
              setEditingWidget({})
            }}
               className="fas fa-check fa-pull-right"></i>
            <i onClick={() => deleteWidget(widget)} className="fas fa-times fa-pull-right"></i>

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
          editingWidget.id !== widget.id &&
          <>
            <i onClick={() => setEditingWidget(widget)} className="fas fa-cog fa-pull-right"></i>
            <p>
              {widget.text}
            </p>
          </>
        }
      </>
  )
}
export default ParagraphWidget