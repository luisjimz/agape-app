import { ReactElement, useEffect, useState } from "react"
import type { Supply } from "../api/supplies";
import SupplyComponent from "@/components/Supply";
import Collapsible from "react-collapsible";
import { SupplyForm } from "@/components/SupplyForm";

export default function Supplies() : ReactElement { 
  const [supplies, setSupplies] =  useState([] as Supply[]) ;
  const columns = ['Name', 'Cost', 'Type', ]

  useEffect(() => {
    fetch( '/api/supplies')
        .then((res) => res.json())
        .then((res) => {
          setSupplies(res);
        })
  }, []) 

  return (
    <div className="flex flex-col gap-8">
      <Collapsible trigger={"Create"} open>
        <SupplyForm/>
      </Collapsible>
      <Collapsible className="w-full text-3xl" 
      triggerOpenedClassName="border rounded w-full text-3xl" 
      triggerClassName="border rounded w-full" 
      trigger={"List"} 
      open>
      <div className="px-[156px]">
        <h1 className="text-2xl text-center mb-5">Supplies</h1>
        <div className="">
        <div className={`border rounded !grid grid-cols-${columns.length} text-center`}>
          {columns.map((column) => <div>{column}</div>)}
        </div>
          {supplies?.map((s : Supply)=> <SupplyComponent entry={s}/>)}
        </div>
      </div>
      </Collapsible>
    </div>
  )
}
