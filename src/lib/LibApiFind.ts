// LibApiFind

//
export default {
  convert_values: function(items: any[]){
    const ret: any[] =[]
    items.forEach(function(item){
//console.log( item )
      let row = {
        id: item._id,
        _id: item._id,
        name: item.name,
        user_id: item.user_id,
        created_at: item.created_at,
        values: '',
      }
      let values:any = {}
      item.values.forEach(function(value_item: any){
        values[value_item.name] = value_item.value
//            console.log(value_item.name , value_item.value)
      })
      row.values = JSON.stringify(values)
      ret.push(row)                        
    });        
    return ret
  },  
  convert_items: function(items: any[]){
    const ret: any[] =[]
    items.forEach(function(item){
//console.log("id=" ,item._id)
      let row: any ={
        id: item._id,
        _id: item._id,
        created_at: item.created_at,
      }
      item.values.forEach(function(value_item: any){
        row[value_item.name] = value_item.value
//            console.log(value_item.name , value_item.value)
      })
      ret.push(row)                        
    });        
    return ret
  },
  convertItemOne: function(item: any){
    let ret ={}
    const row: any ={
      id: item._id,
      _id: item._id,
      created_at: item.created_at,
    }
    item.values.forEach(function(value_item :any){
      row[value_item.name] = value_item.value
//            console.log(value_item.name , value_item.value)
    })
    ret = row
    return ret
  },
  get_order_items: function(items: any[], column: any, asc_type: any){
    const ret: any[] = [];
    items.sort(function (a, b) {
//      return a.num - b.num;
      return a[column] - b[column];
    });  
    if(asc_type == "DESC"){
      items.forEach(function(item){ ret.unshift(item) });
    }else{
      items.forEach(function(item){ ret.push(item) });
    }
    return ret
  },

}
