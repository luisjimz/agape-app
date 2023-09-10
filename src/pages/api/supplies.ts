import type { NextApiRequest, NextApiResponse } from 'next'

export enum SupplyType {
  MADERA,
  TRIPLAY,
  ACBADOS,
  LIJAS,
  DISCOS_DE_CORTE
}

export type Supply = {
  name: string;
  cost: number;
  type: SupplyType;

//   creationDate: Date;
//   updateDate: Date;
}

const supplyArray: Supply[] = [{
  name: 'tabla de pino',
  cost: 300,
  type: SupplyType.MADERA,
},
{
  name: 'triplay de caobilla 12 mm',
  cost: 300,
  type: SupplyType.TRIPLAY,
},
{
  name: 'triplay de pino',
  cost: 300,
  type: SupplyType.TRIPLAY,
}];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Supply[]>
) {
  res.status(200).json(supplyArray)
}   
