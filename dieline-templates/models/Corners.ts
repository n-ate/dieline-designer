import { Facet } from "./Facet.js";
import { ISize } from "../interfaces/ISize.js";
import { IOption } from "../interfaces/IOption.js";

export class Corners implements IOption {
    private _included: boolean;
    private _onchange: Function;
    private _radius: ISize;

    public get included(): boolean {
        return this._included;
    }
    public set included(val: boolean) {
        var old = this._included;
        this._included = val;
        if (old != val) this._onchange.call(this, "included", [val, old]);
    }
    public get radius(): ISize {
        return this._radius;
    }

    constructor(included: boolean, radius: ISize, onchange: Function) {
        this._included = included;
        this._onchange = onchange;
        this._radius = radius;
    }
}
