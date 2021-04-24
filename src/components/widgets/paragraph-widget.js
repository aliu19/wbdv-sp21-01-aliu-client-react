import React from 'react'

const ParagraphWidget = ({widget, editing}) => {
  return(
      <>
        {
          editing &&
          <>
            <select value={widget.type} className="form-control">
              <option value={"HEADING"}>Heading</option>
              <option value={"PARAGRAPH"}>Paragraph</option>
              <option value={"VIDEO"}>Video</option>
              <option value={"IMAGE"}>Image</option>
              <option value={"LINK"}>Link</option>
              <option value={"LIST"}>List</option>
              <option value={"HTML"}>HTML</option>
            </select>
            <br/>
            <textarea className="form-control" value={widget.text}></textarea>
          </>
        }
        {
          !editing &&
          <p>
            {widget.text}
          </p>
        }
      </>
  )
}
export default ParagraphWidget