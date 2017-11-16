// ------------------------------------------------------------------------------
//  Copyright (c) 2017 RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { injectable, inject, named } from "inversify";

import { ICommand } from "@robotlegsjs/core";

import { Payload } from "./Payload";

@injectable()
export class ExecuteMethodWithParametersCommand implements ICommand {
    @inject("Function")
    @named("executeCallback")
    public callback: Function;

    public payload: Payload;

    public execute(payload: Payload = null): void {
        this.payload = payload;
        this.callback(this);
    }
}
