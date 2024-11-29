// import Message from './Message';
import ListGroup from "./components/ListGroup";

import { Fragment } from "react";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

  // if (items.length === 0)
  //   return (
  //     <Fragment>
  //       <h1>List</h1>
  //       <p>No item found</p>
  //     </Fragment>
  //   );

  // const message = items.length === 0 ? <p>No item found</p> : null;

  // const getMessage = () => {
  //   return items.length === 0 ? <p>No item found</p> : null;
  // }

  return (
    <Fragment>
      <h1>List</h1>
      {items.length === 0 ? <p>No item found</p> : null}
      {/* {message} */}
      {/* { getMessage() } */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default App;
