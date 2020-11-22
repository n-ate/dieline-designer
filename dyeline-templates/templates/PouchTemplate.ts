import { Facet } from "../models/Facet.js";
import { Seal } from "../models/Seal.js";
import { Zipper } from "../models/Zipper.js";
import { Notch } from "../models/Notch.js";
import { Hanger } from "../models/Hanger.js";
import { Offset } from "../models/Offset.js";
import { Size } from "../models/Size.js";
import { Placement } from "../enums/Placement.js";
import { Gusset } from "../models/Gusset.js";

export class PouchTemplate {
    private _face: Facet;
    private _back: Facet;
    private _gusset: Gusset;
    private _seal: Seal;
    private _zipper: Zipper;
    private _notch: Notch;
    private _hanger: Hanger;

    public get face(): Facet {
        return this._face;
    }
    public get back(): Facet {
        return this._back;
    }
    public get gusset(): Gusset {
        return this._gusset;
    }
    public get seal(): Seal {
        return this._seal;
    }
    public get zipper(): Zipper {
        return this._zipper;
    }
    public get notch(): Notch {
        return this._notch;
    }
    public get hanger(): Hanger {
        return this._hanger;
    }

    constructor(face: Facet, back: Facet, gusset: Gusset, seal: Seal, zipper: Zipper, notch: Notch, hanger: Hanger) {
        this._face = face;
        this._back = back;
        this._gusset = gusset;
        this._seal = seal;
        this._zipper = zipper;
        this._notch = notch;
        this._hanger = hanger;
    }

    public static getDefault(onchange: Function): PouchTemplate {
        var unit = "mm";
        var frontBackFacet = new Facet(new Size(140, 140, unit, 40, 400, 1, onchange), new Size(229, 229, unit, 40, 600, 1, onchange));
        var gusset = new Gusset(false, new Size(76, 76, "mm", 10, 400, 0.2, onchange), onchange);
        var seal = new Seal(Placement.Bottom, new Size(7.5, 7.5, unit, 5, 15, 0.1, onchange), onchange);
        var zipper = new Zipper(false, new Offset(25, 25, unit, 5, 500, 1, Placement.Top, onchange), new Size(13, 13, unit, 13, 13, 1, onchange), onchange);
        var notch = new Notch(false, new Offset(20, 20, unit, 8, 200, 1, Placement.Center, onchange), onchange);
        var hanger = new Hanger(false, new Offset(6, 6, unit, 8, 40, 0.1, Placement.Top, onchange), new Size(6, 6, unit, 6, 6, 1, onchange), onchange);
        return new PouchTemplate(frontBackFacet, frontBackFacet, gusset, seal, zipper, notch, hanger);
    }
}
