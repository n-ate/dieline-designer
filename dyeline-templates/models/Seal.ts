import { IPlacement } from "../interfaces/IPlacement.js";
import { ISize } from "../interfaces/ISize.js";
import { Placement } from "../enums/Placement.js";

export class Seal implements IPlacement {
    private _placement: Placement;
    private _width: ISize;
    private _onchange: Function;

    public get placement(): Placement {
        return this._placement;
    }
    public set placement(val: Placement) {
        var old = this._placement;
        this._placement = val;
        if (old != val) this._onchange.call(this, "placement", [val, old]);
    }
    public get width(): ISize {
        return this._width;
    }

    constructor(placement: Placement, width: ISize, onchange: Function) {
        this._placement = placement;
        this._width = width;
        this._onchange = onchange;
    }
}
