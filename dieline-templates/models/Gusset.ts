import { GussetType } from "../enums/GussetType.js";
import { IOption } from "../interfaces/IOption.js";
import { Size } from "../models/Size.js";

export class Gusset implements IOption {
    private _included: boolean;
    private _depth: Size;
    private _type: GussetType;
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
    public get type(): GussetType {
        return this._type;
    }
    public set type(type: GussetType) {
        var old = this._type;
        this._type = type;
        if (old != type) this._onchange.call(this, "type", [type, old]);
    }

    constructor(included: boolean, type: GussetType, depth: Size, onchange: Function) {
        this._included = included;
        this._type = type;
        this._depth = depth;
        this._onchange = onchange;
    }
}
