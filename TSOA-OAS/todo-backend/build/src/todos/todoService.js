"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
class TodoService {
    get(todoId) {
        return {
            id: todoId,
            title: "Test Todo",
            description: "This is a test todo",
            done: false
        };
    }
    create(TodoCreationParams) {
        console.log("mock db called");
        return {
            id: "1",
            title: "Test Todo",
            description: "This is a test todo",
            done: false
        };
    }
}
exports.TodoService = TodoService;
