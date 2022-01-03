const initialData ={
   list :[]
}
const todoReducer = (state=initialData,action) =>{
 switch(type.action){
     case "ADDTODO":
         const {id, data} = action.payload;
         return{
             ...state.list,
             data:[{

             }]
         }
 }
}