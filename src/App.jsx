import 'bootstrap/dist/css/bootstrap.min.css'
import AppName from "./Components/AppName";
import AppList from "./Components/AppList";
// import AppItems from "./Components/AppItems";
import ItemLists from "./Components/ItemLists";
import './App.css';
import { useState } from 'react';
import WelcomeMSG from './Components/WelcomeMSG';

function App() {
const [itemLists, setitemLists] = useState([])

const handleNewItem = (itemName, itemDueDate) => {
  // console.log(`New item added : ${itemName} , Date : ${itemDueDate}`)
    setitemLists([...itemLists, {name: itemName, dueDate: itemDueDate},])

   
}
const handleDeleteItem = (todoItemName) => {
const newTodoItems = itemLists.filter(item => item.name !== todoItemName);
setitemLists(newTodoItems);

  // console.log(`Item deleted : ${todoItemName}`)

}

  return <center>
    <AppName></AppName>
    <AppList onNewItem = {handleNewItem}></AppList>
    {itemLists.length === 0 && <WelcomeMSG></WelcomeMSG>}
    <ItemLists itemLists = {itemLists} onDeleteClick = {handleDeleteItem} ></ItemLists>
  </center>
}

export default App
