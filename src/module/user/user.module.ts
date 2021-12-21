import { ModuleContract } from '../../contract/module.contract';
import { method, Route } from '../../contract/route.contract';
import { ListCommand } from "./command/list.command";

export class UserModule implements ModuleContract {
    basePath = '/user';

    routes: Route[] = [
        {
            method: method.GET,
            path: '/list',
            command: ListCommand,
        },
    ];
}
