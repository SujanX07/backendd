import { CreateTaskDto } from './dto/create-task.dto';
import { PrismaService } from 'src/prisma.service';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: PrismaService);
    arr: any[];
    addTask(taskBody: CreateTaskDto): Promise<void>;
    getTasks(): Promise<(import("@prisma/client/runtime/library").GetResult<{
        id: number;
        taskName: string;
        taskStatus: boolean;
    }, unknown> & {})[]>;
    searchTask(taskName: string): any;
    updateTask(id: number, task: CreateTaskDto): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        taskName: string;
        taskStatus: boolean;
    }, unknown> & {}>;
    deleteTask(id: number): Promise<import("@prisma/client/runtime/library").GetResult<{
        id: number;
        taskName: string;
        taskStatus: boolean;
    }, unknown> & {}>;
}
