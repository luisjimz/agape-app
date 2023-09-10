import { ReactElement } from "react";
import type { Supply } from "@/pages/api/supplies";


interface SupplyEntry {
  entry: Supply;
}

export default function SupplyComponent(supply: SupplyEntry) : ReactElement {
  return(
    <div className="border !grid grid-cols-3 text-center">
      <div className="text-left">{supply.entry.name}</div>
      <div>${supply.entry.cost}</div>
      <div>{supply.entry.type}</div>
    </div>
  );
}