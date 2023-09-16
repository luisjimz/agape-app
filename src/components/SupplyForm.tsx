import type { Supply } from "@/pages/api/supplies";
import { ReactElement, useState } from "react";

export function SupplyForm()  : ReactElement {
  const [formData, setFormData] = useState({name: "",cost: "",type: ""});
  function putSupply(form:any){
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: form
      };

    fetch( '/api/supplies', requestOptions)
      .then((res) => res.json())
      .then((res) => {
        
      })
  }

  return(
    <div>
      <div className="text-center text-2xl">Crear nuevo insumo</div>
      <form className="flex flex-col gap-3">
        <label className="text-lg">
          Nombre:<input className="border rounded" type="text" onChange={(name) => setName(name.)}/>
        </label>
        <label>
          Cost:<input className="border rounded" type="number"/>
        </label>
        <button className=" border rounded w-[200px]" type="submit" onSubmit={}>Submit</button>
      </form>
    </div>
  );
}


