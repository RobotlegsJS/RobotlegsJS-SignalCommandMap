// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { injectable } from "inversify";

import { Signal } from "@robotlegsjs/signals";

import { Data } from "./Data";

@injectable()
export class TargetSignal extends Signal {
    constructor() {
        super(Data);
    }
}
