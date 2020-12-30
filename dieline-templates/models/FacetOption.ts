import { Facet } from "./Facet.js";
import { ISize } from "../interfaces/ISize.js";
import { IOption } from "../interfaces/IOption.js";

export class FacetOption extends Facet implements IOption {
    private _included: boolean;
    private _onchange: Function;

    public get included(): boolean {
        return this._included;
    }
    public set included(val: boolean) {
        var old = this._included;
        this._included = val;
        if (old != val) this._onchange.call(this, "included", [val, old]);
    }
    constructor(included: boolean, width: ISize, height: ISize, onchange: Function) {
        super(width, height);
        this._included = included;
        this._onchange = onchange;
    }
}
