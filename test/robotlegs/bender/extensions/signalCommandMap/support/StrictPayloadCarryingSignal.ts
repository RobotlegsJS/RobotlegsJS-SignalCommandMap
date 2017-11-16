// ------------------------------------------------------------------------------
//  Copyright (c) 2017 RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { injectable } from "inversify";

import { Signal } from "@robotlegsjs/signals";

import { Payload } from "./Payload";

@injectable()
export class StrictPayloadCarryingSignal extends Signal {
    constructor() {
        super(Payload);
    }
}