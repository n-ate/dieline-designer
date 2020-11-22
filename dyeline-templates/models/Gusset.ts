import { IOption } from "../interfaces/IOption.js";
import { Size } from "../models/Size.js";

export class Gusset implements IOption {
    private _included: boolean;
    private _depth: Size;
    private _onchange: Function;

    public get included(): boolean {
        return this._included;
    }
    public set included(val: boolean) {
        var old = this._included;
        this._included = val;
        if (old != val) this._onchange.call(this, "gusset", [val, old]);
    }
    public get depth(): Size {
        return this._depth;
    }

    constructor(included: boolean, depth: Size, onchange: Function) {
        this._included = included;
        this._depth = depth;
        this._onchange = onchange;
    }
}
