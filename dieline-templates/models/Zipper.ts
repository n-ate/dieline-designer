import { FacetPlacement } from "../enums/FacetPlacement";
import { ZipperType } from "../enums/ZipperType";
import { IOption } from "../interfaces/IOption";
import { ISize } from "../interfaces/ISize";
import { Offset } from "../models/Offset";

export class Zipper implements IOption {
    private _included: boolean;
    private _offset: Offset;
    private _facet: FacetPlacement;
    private _height: ISize;
    private _type: ZipperType;
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
    public get facet(): FacetPlacement {
        return this._facet;
    }
    public set facet(facet: FacetPlacement) {
        var old = this._facet;
        this._facet = facet;
        if (old != facet) this._onchange.call(this, "type", [facet, old]);
    }
    public get height(): ISize {
        return this._height;
    }
    public get type(): ZipperType {
        return this._type;
    }
    public set type(type: ZipperType) {
        var old = this._type;
        this._type = type;
        if (old != type) this._onchange.call(this, "type", [type, old]);
    }

    constructor(included: boolean, offset: Offset, facet: FacetPlacement, height: ISize, type: ZipperType, onchange: Function) {
        this._included = included;
        this._offset = offset;
        this._facet = facet;
        this._height = height;
        this._type = type;
        this._onchange = onchange;
    }
}
