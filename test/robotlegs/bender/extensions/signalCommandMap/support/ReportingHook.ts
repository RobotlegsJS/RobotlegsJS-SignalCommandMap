// ------------------------------------------------------------------------------
//  Copyright (c) 2017 RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { injectable, inject, named } from "inversify";

import { ReportingCommand } from "./ReportingCommand";

@injectable()
export class ReportingHook {
    @inject("Function")
    @named("hookCallback")
    public callback: Function;

    @inject(ReportingCommand) public command: ReportingCommand;

    public hook() {
        this.callback(this, ReportingHook);
    }
}
