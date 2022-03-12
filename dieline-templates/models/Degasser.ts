import { FacetPlacement } from "../enums/FacetPlacement.js";
import { IOption } from "../interfaces/IOption.js";
import { ISize } from "../interfaces/ISize.js";
import { Offset } from "./Offset.js";

export class Degasser implements IOption {
    private _included: boolean;
    private _offset: Offset;
    private _facet: FacetPlacement;
    private _height: ISize;
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
    public get height(): ISize {
        return this._height;
    }
    public get facet(): FacetPlacement {
        return this._facet;
    }
    public set facet(facet: FacetPlacement) {
        var old = this._facet;
        this._facet = facet;
        if (old != facet) this._onchange.call(this, "type", [facet, old]);
    }

    constructor(included: boolean, offset: Offset, facet: FacetPlacement, height: ISize, onchange: Function) {
        this._included = included;
        this._offset = offset;
        this._facet = facet;
        this._height = height;
        this._onchange = onchange;
    }
}
