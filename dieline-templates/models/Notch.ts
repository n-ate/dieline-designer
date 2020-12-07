import { IOption } from "../interfaces/IOption.js";
import { Offset } from "../models/Offset.js";

export class Notch implements IOption {
    private _included: boolean;
    private _offset: Offset;
    private _onchange: Function;

    public get included(): boolean {
        return this._included;
    }
    public set included(val: boolean) {
        var old = this._included;
        this._included = val;
        if (old != val) this._onchange.call(this, "included", [val, old]);
    }
    public get offset(): Offset {
        return this._offset;
    }

    constructor(included: boolean, offset: Offset, onchange: Function) {
        this._included = included;
        this._offset = offset;
        this._onchange = onchange;
    }
}
