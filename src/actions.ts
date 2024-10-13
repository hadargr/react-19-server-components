'use server';

let completed: Record<string, boolean> = {};

export async function toggleCompleted(id: string, isCompleted: boolean) {
    // Save to DB...
    console.log(`*** Toggling todo with id ${id} to ${isCompleted ? 'completed' : 'not completed'}`);
    completed[id] = isCompleted;
    return completed[id];
}
