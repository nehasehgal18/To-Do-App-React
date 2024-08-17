
function AppItems({tableName, date, onDeleteClick}){
    
    // let tableName = 'Buy Item'
    // let date = new Date();
 
     return <div className="container">
     <div className="row">
       <div className="col">
        {tableName}
       </div>
       <div className="col order-5">
       <button type="button" className="btn btn-danger" 
       onClick={() => onDeleteClick(tableName)}>Delete</button>
       </div>
       <div className="col order-1">
       {date}
       </div>
     </div>
     </div>
 }
 
 export default AppItems;