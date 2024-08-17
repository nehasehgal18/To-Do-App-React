import { useState } from "react";
// import { RiAddBoxFill } from "react-icons/ri";<RiAddBoxFill />

function AppList({onNewItem}){

const [todoName, settodoName] = useState('');
const [todoDueDate, settodoDueDate] = useState('');

const handleNameChange = (event) => {
settodoName(event.target.value)
}

const handleDateChange = (event) => {
  settodoDueDate(event.target.value)
}

const handleAddButtonClicked = () => {
  onNewItem(todoName, todoDueDate);
  settodoDueDate('');
  settodoName('')
}

    return <div className="container">
    <div className="row">
      <div className="col">
        <input type="text" value={todoName} placeholder="Enter to-do-list" onChange={handleNameChange} />
      </div>
      <div className="col order-5">
      <button type="button" className="btn btn-success" onClick={handleAddButtonClicked}>ADD</button>
      </div>
      <div className="col order-1">
      <input type="date" value={todoDueDate} onChange={handleDateChange} />
      </div>
    </div>
    </div>
}

export default AppList;