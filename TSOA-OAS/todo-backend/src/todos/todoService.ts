import { Todo } from "./todo";

export type TodoCreationParams = Pick<Todo,"title"|"description">;

export class TodoService{
    public get(todoId:string): Todo {
        return{
            id:todoId,
            title: "Test Todo",
            description: "This is a test todo",
            done: false
        }
    }

    public create(TodoCreationParams:TodoCreationParams): Todo {
        console.log("mock db called");
        return{
            id:"1",
            title: "Test Todo",
            description: "This is a test todo",
            done: false
        }
    }
}