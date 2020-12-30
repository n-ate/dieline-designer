import { Facet } from "../models/Facet.js";
import { FacetOption } from "../models/FacetOption.js";
import { Seal } from "../models/Seal.js";
import { Zipper } from "../models/Zipper.js";
import { Notch } from "../models/Notch.js";
import { Hanger } from "../models/Hanger.js";
import { Offset } from "../models/Offset.js";
import { Size } from "../models/Size.js";
import { Placement } from "../enums/Placement.js";
import { Gusset } from "../models/Gusset.js";
import { Degasser } from "../models/Degasser.js";

export class PouchTemplate {
    private _front: Facet;
    private _back: Facet;
    private _left: Facet;
    private _right: Facet;
    private _gusset: Gusset;
    private _seal: Seal;
    private _zipper: Zipper;
    private _notch: Notch;
    private _hanger: Hanger;
    private _degasser: Degasser;

    public get front(): Facet {
        return this._front;
    }
    public get back(): Facet {
        return this._back;
    }
    public get left(): Facet {
        return this._left;
    }
    public get right(): Facet {
        return this._right;
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
    public get degasser(): Degasser {
        return this._degasser;
    }

    constructor(front: Facet, back: Facet, left: FacetOption, right: FacetOption, gusset: Gusset, seal: Seal, zipper: Zipper, notch: Notch, hanger: Hanger, degasser: Degasser) {
        this._front = front;
        this._back = back;
        this._left = left;
        this._right = right;
        this._gusset = gusset;
        this._seal = seal;
        this._zipper = zipper;
        this._notch = notch;
        this._hanger = hanger;
        this._degasser = degasser;
    }

    public static getDefault(onchange: Function): PouchTemplate {
        let unit = "mm";
        let faceHeights = new Size(229, 229, unit, 40, 600, 1, onchange);
        let frontBackFacet = new Facet(new Size(140, 140, unit, 40, 400, 1, onchange), faceHeights);
        let leftRightFacet = new FacetOption(false, new Size(140, 140, unit, 40, 400, 1, onchange), faceHeights, onchange);
        let gusset = new Gusset(false, new Size(76, 76, unit, 10, 400, 0.2, onchange), onchange);
        let seal = new Seal(Placement.Bottom, new Size(7.5, 7.5, unit, 5, 15, 0.1, onchange), onchange);
        let zipper = new Zipper(false, new Offset(25, 25, unit, 5, 500, 1, Placement.Top, onchange), new Size(13, 13, unit, 13, 13, 1, onchange), onchange);
        let notch = new Notch(false, new Offset(20, 20, unit, 8, 200, 1, Placement.Center, onchange), onchange);
        let hanger = new Hanger(false, new Offset(6, 6, unit, 8, 40, 0.1, Placement.Top, onchange), new Size(6, 6, unit, 6, 6, 1, onchange), onchange);
        let degasser = new Degasser(false, new Offset(60, 60, unit, 18, 400, 1, Placement.Top, onchange), new Size(18, 18, unit, 18, 18, 1, onchange), onchange);
        return new PouchTemplate(frontBackFacet, frontBackFacet, leftRightFacet, leftRightFacet, gusset, seal, zipper, notch, hanger, degasser);

        //TODO: wrap onchange function and add business logic in this class, such as including a gusset makes seal bottom, or including a gusset makes the leftRightFace width the same as the gusset depth
    }
}
