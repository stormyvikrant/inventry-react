import { useState } from "react";


export const Inventory = () => {
  const [inventry, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens:10,
  });
    
    if (inventry.books < 0) {
      setInv({
        books: 0,
        notebooks: inventry.notebooks,
        pens: inventry.pens,
        inkpens: inventry.inkpens,
      });
    }
      if (inventry.notebooks < 0) {
        setInv({
          books: inventry.books,
          notebooks: 0,
          pens: inventry.pens,
          inkpens: inventry.inkpens,
        });
      }
        if (inventry.pens < 0) {
          setInv({
            books: inventry.books,
            notebooks: inventry.notebooks,
            pens: 0,
            inkpens: inventry.inkpens,
          });
        }

        if (inventry.inkpens < 0) {
          setInv({
            books: inventry.books,
            notebooks: inventry.notebooks,
            pens: inventry.pens,
            inkpens: 0,
          });
        }
    let totalvalue = inventry.books + inventry.notebooks + inventry.pens;
    const handleChange = (value,product)=>{
      if(product==="books")
      {
        
        setInv({ books: inventry.books + value, notebooks: inventry.notebooks, pens:inventry.pens ,inkpens:inventry.inkpens});
      
        
      }
      else if(product==="notebooks")
      {
        setInv({
          books: inventry.books,
          notebooks: inventry.notebooks+value,
          pens: inventry.pens,
          inkpens:inventry.inkpens,
        });

      }
      else if(product==="pens"){
         setInv({
           books: inventry.books,
           notebooks: inventry.notebooks,
           pens: inventry.pens+value,
           inkpens:inventry.inkpens,
         });

      }
      else if(product==="inkpens"){
        setInv({
          books: inventry.books,
          notebooks: inventry.notebooks,
          pens: inventry.pens+value,
          inkpens:inventry.inkpens+value,
        });

     }
    }

  return (
    <div className="mainbox">
      <div className="items">
        <span>Books: </span>
        <button 
        onClick={()=>{
          handleChange(1,"books")
        }}
        className="Btn">+</button>
        <button 
        onClick={()=>{
          handleChange(-1,"books")
        }}
        className="Btn">-</button>
        <span>{inventry.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button 
                onClick={()=>{
                  handleChange(1,"notebooks")
                }}
        className="Btn">+</button>
        <button 
                onClick={()=>{
                  handleChange(-1,"notebooks")
                }}
        className="Btn">-</button>
        <span>{inventry.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button 
        onClick={()=>{
          handleChange(1,"pens")
        }}
        className="Btn">+</button>
        <button 
        onClick={()=>{
          handleChange(-1,"pens")
        }}
        className="Btn">-</button>
        <span>{inventry.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button 
        onClick={()=>{
          handleChange(1,"inkpens")
        }}
        className="Btn">+</button>
        <button 
        onClick={()=>{
          handleChange(-1,"inkpens")
        }}
        className="Btn">-</button>
        <span>{inventry.inkpens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {totalvalue}
    </div>
  );
};