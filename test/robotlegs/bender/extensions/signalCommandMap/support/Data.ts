// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { injectable } from "@robotlegsjs/core";

@injectable()
export class Data {
    protected _value: number;

    constructor(value: number) {
        this._value = value;
    }

    public get value(): number {
        return this._value;
    }
}
