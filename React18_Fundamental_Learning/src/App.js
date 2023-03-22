import "./App.css";


// import { Form } from "./component/Form";

// import { PostForm } from "./component/PostForm";
// import { PostList } from "./component/PostList";
// import "./appStyles.css";
// import styles from "./appStyles.module.css";

// import { Inline } from "./component/Inline";
// import { StyleSheet } from "./component/StyleSheet";
// import { NameList } from "./component/NameList";
// import { UserGreeting } from "./component/UserGreeting";
//import Greet from "./component/Greet";
// import { Message } from "./component/Message";
// import { ClickHandler } from "./component/ClickHandler";
// import { ParentComponent } from "./component/ParentComponent"

import NAMES from './component/data.json';
import { useState, useTransition } from 'react';

function App() {
  const [query, setQuery] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [isPending, startTransition] = useTransition()

  const changeHandler = (event) => {
    setInputValue(event.target.value)
    startTransition(() => setQuery(event.target.value))
  }
  const filterNames = NAMES.filter((item) => {
    return item.first_name.includes(query) || item.last_name.includes(query)
  })


  return (
    <div className="App">
      {/* <Greet name='Abhi'>
        <button>Action</button>
      </Greet>
      <Greet name='Prithivi'/>
      <Greet name='Singh'>
        <p>This is children props</p>
      </Greet> */}
      {/* <Message /> */}
      {/* <ClickHandler/> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <StyleSheet /> */}
      {/* <Inline /> */}
      {/* <h1 className="error">Error</h1> */}
      {/* <h1 className={styles.success}>Succes</h1> */}
      {/* <Form /> */}
       
      {/* <PostForm /> */}
      {/* <PostList /> */}

      <input type='text' value={inputValue} onChange={changeHandler} />
      {isPending && <p>Updating list...</p>}
      {filterNames.map((item) => (
          <p key={item.id}>
          {item.first_name} {item.last_name}
          </p>
        ))}
    </div>
  );
}

export default App;
