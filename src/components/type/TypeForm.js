import React, { useContext, useEffect, useState } from "react";
import { TypeContext } from "./TypeProvider";
// import "./Types.css"


export const TypeForm = () => {
  const { types, getTypes } = useContext(TypeContext);

  const [type, setTypes] = useState({});



  const handleControlledInputChange = (event) => {
    const newType = { ...type };
    newType[event.target.name] = event.target.value;
    setTypes(newType);
  };

  useEffect(() => {
    getTypes();
  }, []);
    

  return (
    <form className="typeForm">
      <h2 className="typeForm__title">Set Type</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="type">Choose Type: </label>
          <select
            value={type.id}
            name="typeId"
            id="typeId"
            className="form-control"
            onChange={handleControlledInputChange}
          >
            <option value="0">Select a Type</option>
            {types.map((t) => (
              <option key={t.id} value={t.id}>
                {t.typeName}
              </option>
            ))}
          </select>
        </div>
      </fieldset>

    </form>
  );
};
