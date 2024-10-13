import { TodoItem } from "./types";

export async function fetchTodos(shouldThrow = false): Promise<Array<TodoItem>> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response.json();
    } catch (error) {
        console.error(error);
        if (shouldThrow) {
            throw new Error('Failed to fetch data');
        }
        return [];
    }
}