import { IPlacement } from "../interfaces/IPlacement.js";
import { Size } from "../models/Size.js";
import { Placement } from "../enums/Placement.js";

export class Offset extends Size implements IPlacement {
    private _placement: Placement;

    public get placement(): Placement {
        return this._placement;
    }
    public set placement(val: Placement) {
        var old = this._placement;
        this._placement = val;
        if (old != val) this._onchange.call(this, "placement", [val, old]);
    }

    constructor(value: number, initial: number, unit: string, min: number, max: number, step: number, placement: Placement, onchange: Function) {
        super(value, initial, unit, min, max, step, onchange);
        this._placement = placement;
    }
}
