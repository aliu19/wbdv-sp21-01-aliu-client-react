import React from 'react'

const ImageWidget = ({widget, editing, editingWidget, setEditingWidget, updateWidget, deleteWidget}) => {

  return(
      <>
        {
          editing &&
          <>
            <div>
              Image URL
              <input
                  className="form-control"
                  placeholder="Image URL"
                  onChange={(event) =>
                      setEditingWidget({
                        ...editingWidget,
                        src: event.target.value
                      })}
                  value={editingWidget.src}
              />

              Image Width
              <input
                  className="form-control"
                  onChange={(event) =>
                      setEditingWidget({
                        ...editingWidget,
                        width: parseInt(event.target.value)
                      })}
                  value={editingWidget.width}
              />

              Image Height
              <input
                  className="form-control"
                  onChange={(event) =>
                      setEditingWidget({
                        ...editingWidget,
                        height: parseInt(event.target.value)
                      })}
                  value={editingWidget.height}
              />
            </div>
          </>
        }
        {
          !editing &&
          <>
            <img src={widget.src}
                 width={widget.width}
                 height={widget.height}
                 alt="img"/>
          </>
        }
      </>
  )
}
export default ImageWidget