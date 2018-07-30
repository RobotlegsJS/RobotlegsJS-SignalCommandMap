// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { injectable, inject, named } from "inversify";

import { IGuard } from "@robotlegsjs/core";

@injectable()
export class ReportingGuard2 implements IGuard {
    @inject("Function")
    @named("approveCallback")
    public callback: Function;

    public approve(): boolean {
        this.callback(this, ReportingGuard2);
        return true;
    }
}
