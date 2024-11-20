import { Conferencia } from "./conferencia";

export class ConferenciaDetail extends Conferencia {
    constructor(id: number,
        name: string,
        starts: string,
        ends: string,
        description: string,
        venue: string
        ){
          super(id, name, starts, ends, venue, description);
        }
}
