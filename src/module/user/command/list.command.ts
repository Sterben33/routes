import { CommandContract } from '../../../contract/command.contract';
import { Request } from 'express';
import { ListResponseDto } from './response-dto/list.response-dto';


export class ListCommand extends CommandContract {
    // private readonly userStorage: UserStorage;

    // constructor() {
    //     super();
    //     this.onlyAuthorized = true;
    //     this.userStorage = userStorage;
    // }

    async run(req: Request): Promise<any> {
        return <ListResponseDto>{
            text: 'вы успешно добрались!',
        };
    }
}
