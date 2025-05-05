import { SpaceShipType } from "./space-ship-type.enum";

export interface OrderFormValue {
    [x: string]: any;
    shipCount: number;
    shipType: SpaceShipType;
}
