import ListGroup from "./components/ListGroup";
import { Fragment } from "react";
import { MouseEvent } from "react";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleClick = (e: MouseEvent) => console.log(e);

  return (
    <Fragment>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" onClick={handleClick} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default App;
