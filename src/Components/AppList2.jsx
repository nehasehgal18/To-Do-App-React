function AppList2(){
  let tableName = 'Go to College'
   let date = new Date();
    return  <div class="container">
    <div class="row">
      <div class="col">
        {tableName}
      </div>
      <div class="col order-5">
      <button type="button" class="btn btn-danger">Delete</button>
      </div>
      <div class="col order-1">
      {date.toLocaleDateString()}{" - "}{date.toLocaleTimeString()}
      </div>
    </div>
  
  </div>
}

export default AppList2;