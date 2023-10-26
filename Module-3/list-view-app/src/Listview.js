import React from 'react'

function Listview(props) {
  return (
    <div style={{textAlign:"justify", marginLeft:"450px"}}>
        <h1>List view app</h1>
        <ol>
            {/* using map method render the list and asign the object with unique key id */}
            {props.persons.map((value)=>(
                 <li key={value.id}>{value.fname}&nbsp;{value.lname}</li>
            ))}
        </ol>
    </div>
  )
}

export default Listview;