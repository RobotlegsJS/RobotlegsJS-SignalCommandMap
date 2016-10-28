// ------------------------------------------------------------------------------
//  Copyright (c) 2016 Goodgame Studios. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import {
    IInjector,
    ILogger,
    ICommandExecutor,
    ICommandTrigger,
    CommandExecutor,
    CommandMapper,
    CommandMappingList,
    CommandPayload
} from "robotlegs";

import { ISignal } from "signals.js";

/**
 * @private
 */
export class SignalCommandTrigger implements ICommandTrigger {

    /*============================================================================*/
    /* Private Properties                                                         */
    /*============================================================================*/

    private _signalClass: any;

    private _signal: ISignal;

    private _injector: IInjector;

    private _mappings: CommandMappingList;

    private _executor: ICommandExecutor;

    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/

    /**
     * @private
     */
    constructor(injector: IInjector, signalClass: any, processors?: Function[], logger?: ILogger) {
        this._injector = injector;
        this._signalClass = signalClass;
        this._mappings = new CommandMappingList(this, processors, logger);
        this._executor = new CommandExecutor(injector, this._mappings.removeMapping);
    }

    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/

    /**
     * @private
     */
    public createMapper(): CommandMapper {
        return new CommandMapper(this._mappings);
    }

    /**
     * @inheritDoc
     */
    public activate(): void {
        if (!this._injector.isBound(this._signalClass)) {
            this._injector.bind(this._signalClass).to(this._signalClass).inSingletonScope();
            // this._injector.map(this._signalClass).asSingleton();
        }
        this._signal = this._injector.get<ISignal>(this._signalClass);
        this._signal.add(this.routePayloadToCommands);
    }

    /**
     * @inheritDoc
     */
    public deactivate(): void {
        if (this._signal) {
            this._signal.remove(this.routePayloadToCommands);
        }
    }

    public toString(): string {
        return this._signalClass.toString();
    }

    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/

    private routePayloadToCommands = (...valueObjects): void => {
        let payload: CommandPayload = new CommandPayload(valueObjects, this._signal.valueClasses);
        this._executor.executeCommands(this._mappings.getList(), payload);
    }
}
