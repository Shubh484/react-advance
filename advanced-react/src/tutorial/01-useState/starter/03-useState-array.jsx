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
            </button>
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
