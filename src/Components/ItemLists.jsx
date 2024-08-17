
import AppItems from "./AppItems";

const ItemLists = ({itemLists , onDeleteClick}) => {
return <>
{itemLists.map((item) => (
    <AppItems key={item.name}
    tableName={item.name} date = {item.dueDate} onDeleteClick = {onDeleteClick} ></AppItems>
    ))}

    
</>
}

export default ItemLists;