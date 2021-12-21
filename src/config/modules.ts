import { ModuleContract } from '../contract/module.contract';
import { Type } from '../contract/type.contract';
import { UserModule } from "../module/user/user.module";

const moduleClasses: Array<Type<ModuleContract>> = [
    UserModule,
];

export const modules = moduleClasses.map(moduleClass => new moduleClass());
