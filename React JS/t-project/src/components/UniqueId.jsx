import React,{useId} from "react"

const UniqueId = () => {
    const id = useId()
    console.log(id)
  return (
      <div>
          <label htmlFor="">label</label>
          {id}
    </div>
  )
}

export default UniqueId