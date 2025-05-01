import { SpaceShipType } from "./space-ship-type";

export interface OrderFormValue {
    [x: string]: any;
    shipCount: number;
    shipType: SpaceShipType;
}
