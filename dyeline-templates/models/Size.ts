import { ISize } from "../interfaces/ISize.js";

export class Size implements ISize {
    private _value: number;
    private _initial: number;
    private _unit: string;
    private _min: number;
    private _max: number;
    private _step: number;
    protected _onchange: Function;

    public get value(): number {
        return this._value;
    }
    public set value(val: number) {
        var old = this._value;
        this._value = val;
        if (old != val) this._onchange.call(this, "value", [val, old]);
    }
    public get initial(): number {
        return this._initial;
    }
    public get unit(): string {
        return this._unit;
    }
    public get min(): number {
        return this._min;
    }
    public get max(): number {
        return this._max;
    }
    public get step(): number {
        return this._step;
    }

    constructor(value: number, initial: number, unit: string, min: number, max: number, step: number, onchange: Function) {
        this._value = value;
        this._initial = initial;
        this._unit = unit;
        this._min = min;
        this._max = max;
        this._step = step;
        this._onchange = onchange;
    }
}
