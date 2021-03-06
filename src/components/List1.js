
function  List1({items}) {
    const example1 = ["aplle","kiwi" ,"lemon"]
    return(
        <div className="App">
           <ul>
               <li>{items[0]}</li>
               <li>{items[2]}</li>
               <li>{items[3]}</li>
           </ul>
        </div>
    )
}
export default List1;
