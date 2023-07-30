import { AppService } from './app.service';
import { TodoValidation } from './todo.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getCsit(): string;
    addTodo(todoBody: TodoValidation): TodoValidation;
}
