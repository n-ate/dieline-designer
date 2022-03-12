import { IPlacement } from "../interfaces/IPlacement.js";
import { ISize } from "../interfaces/ISize.js";
import { Placement } from "../enums/Placement.js";

export class Seal {
    // implements IPlacement
    private _placements: Placement[];
    private _width: ISize;
    private _onchange: Function;

    public get placements(): Placement[] {
        return this._placements;
    }
    public set placements(val: Placement[]) {
        var old = this._placements;
        this._placements = val; //.sort((a, b) => (a * 1 < b * 1 ? -1 : 1)); //keep order the same
        if (old != this._placements) this._onchange.call(this, "placements", [val, old]);
    }
    public get width(): ISize {
        return this._width;
    }

    constructor(placements: Placement[], width: ISize, onchange: Function) {
        this._placements = placements;
        this._width = width;
        this._onchange = onchange;
    }
}
