import type { Supply } from "@/pages/api/supplies";
import { ReactElement, useState } from "react";

export function SupplyForm()  : ReactElement {
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  function putSupply(e){
    e.preventDefault();
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( {
        name,
        cost
      })
      };
      
    fetch( '/api/supplies', requestOptions)
      .then((res) => res.json())
      .then((res) => {
        
      })
  }

  return(
    <div>
      <div className="text-center text-2xl">Crear nuevo insumo</div>
      <form className="flex flex-col gap-3 ml-8">
        <label className="text-lg">
          Nombre:<input className="border rounded" type="text" onChange={(name) => setName(name.target.value)}/>
        </label>
        <label>
          Cost:<input className="border rounded" type="number"/>
        </label>
        <button className=" border rounded w-[200px]" type="submit" onClick={putSupply}>Submit</button>
      </form>
    </div>
  );
}


