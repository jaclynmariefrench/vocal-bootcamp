import React, { useContext, useState } from "react"
import { TypeContext } from "./TypeProvider"
// import "./Types.css"
import { useHistory } from 'react-router-dom';

export const TypeForm = () => {
    const { types, addType } = useContext(TypeContext)
    
    const [type, setTypes] = useState({})

	  const history = useHistory();

    const handleControlledInputChange = (event) => {
      const newType = { ...type }
      newType[event.target.name] = event.target.value
      setTypes(newType)
    }

    const handleSaveType = () => {
      if (parseInt(type.id) === 0) {
          window.alert("Please select a Type")
      } else {
        addType({
              name: type.typeName,
              id: type.id,
          })
          .then(() => history.push("/voiceTypes"))
        } 
      }
      
      
      
      return (
          <form className="typeForm">
        <h2 className="typeForm__title">Set Type</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="Type">Choose Type: </label>
            <select value={type.id} name="Type" id="TypeId" className="form-control" onChange={handleControlledInputChange}>
              <option value="0">Select a Type</option>
              {types.map(t => (
                  <option key={t.id} value={t.id}>
                  {t.typeName}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
  
        <button className="btn btn-primary"
          onClick={event => {
              event.preventDefault() // Prevent browser from submitting the form and refreshing the page
              handleSaveType()
            }}>
        Save Type</button>
      </form>
    )
}
