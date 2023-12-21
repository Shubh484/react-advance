import { data } from "../../../data";
import { useState } from "react";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    // console.log(id);
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const ClearAllItems = () => {
    setPeople([]);
  };

  return (
    <>
      {people.map((person) => {
        // console.log(person);
        // return <h4>item</h4>;
        const { id, name } = person;

        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              remove
            </button>{" "}
            {/*   <button type="button" onClick={() => removeItem(id)}>:

This approach creates an arrow function inline within the onClick attribute. It means that each time this button is clicked, a new function instance is created.
It's useful if you need to pass additional arguments or perform some extra logic before calling the removeItem function.
<button type="button" onClick={removeItem(id)}>:

This syntax directly calls the removeItem function when the component renders. It executes immediately and assigns whatever removeItem(id) returns to onClick.  */}
          </div>
        );
      })}
      <button
        type="button"
        className="btn"
        style={{ marginTop: "2rem" }}
        onClick={ClearAllItems}
      >
        clear all
      </button>
    </>
  );
};

export default UseStateArray;
