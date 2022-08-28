// type utilities
type Todo = {
    title: string;
    description: string;
    completed: boolean;
};

const todo: Readonly<Todo> = {
    title: "Delete inactive users",
    description: "We should delete inactive users after 30 days",
    completed: false,
};
 
//pick
type TodoPreview1 = Pick<Todo, "title" | "completed">;

const todo1: TodoPreview1 = {
    title: "Clean room",
    completed: false,
};

//omit
type TodoPreview = Omit<Todo, "description">;

const todo2: TodoPreview = {
    title: "Clean room",
    completed: false,
};

