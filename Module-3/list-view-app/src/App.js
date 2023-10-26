import React from 'react'
import Listview from './Listview';
function App() {
  //store object in array
  const persons = [
    {
      id: 1,
      fname: "John",
      lname: "Adam"
    },

    {
      id: 2,
      fname: "Elisa",
      lname: "Dsouza"
    },

    {
      id: 3,
      fname: "Ronaldo",
      lname: "Christopher"
    },
  ]
  return (
    <>
      {/* initiate the app and pass the object to another component through props */}
      <Listview persons={persons}/>
    </>
  );
}

export default App;
