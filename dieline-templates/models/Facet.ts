import { ISize } from "../interfaces/ISize.js";

export class Facet {
    private _height: ISize;
    private _width: ISize;

    public get height(): ISize {
        return this._height;
    }
    public get width(): ISize {
        return this._width;
    }

    constructor(width: ISize, height: ISize) {
        this._width = width;
        this._height = height;
    }
}
