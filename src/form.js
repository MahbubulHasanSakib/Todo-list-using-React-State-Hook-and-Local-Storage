import React,{useState} from 'react';
import { render } from 'react-dom/cjs/react-dom.development';
import Items from './items';
function Form()
{
  const [item,setItem]=new useState('');
  const[rend,setRender]=new useState(false);
  function writeItem(event)
  {
      setItem(event.target.value);
  }
  //const[items,addItem]=useState([]);

  function Add()
  {
       let itemArr=[];
       if(localStorage.getItem("items"))
       {
         itemArr=JSON.parse(localStorage.getItem("items"));
         itemArr.push(item);
         localStorage.setItem("items",JSON.stringify(itemArr));
       }
       else
       {
         itemArr.push(item);
         localStorage.setItem("items",JSON.stringify(itemArr));
       }
       /*addItem(preItem=>
         [...preItem,item]
        );*/
        setItem('');
        setRender(!rend);
        localStorage.setItem('items',JSON.stringify(itemArr))
  }
  function deleteItem(Id)
  {
    //console.log(Id);
    let itemArr=[];
    if(localStorage.getItem("items"))
    {
      itemArr=JSON.parse(localStorage.getItem("items"));
      itemArr=itemArr.filter((item,index)=> index!==Id);
      localStorage.setItem("items",JSON.stringify(itemArr));
      
    }
   /*addItem(prevItem=>{
     return prevItem.filter(
       (itm,index)=>
       {
         return index!==Id;
       }
     )
   })*/
   setRender(!rend);
  }

  return(
    
    <div>
     <input onChange={writeItem} type="text" value={item} placeholder="Enter an item"/>
      <input id="submit" type="submit" onClick={Add} />
      <div className="items">
        <ul>
      {localStorage.getItem("items")?(JSON.parse(localStorage.getItem("items"))).map((item,index)=>
        {
          return <li key={index}>
             <Items  val={item} id={index} onDel={deleteItem} />
            </li>;
        }):null}
      
        </ul>
        </div>
      </div>
  )

}

export default Form;