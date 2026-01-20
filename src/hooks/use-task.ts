import useLocalStorage from "use-local-storage";
import { TASKS_KEY, TaskState, type Task } from "../models/task";
import { delay } from "../helpers/utils";
import React from "react";


export default function useTask() {
    const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);
    const [isUpdatingTask, setUpdatingTask] = React.useState(false);
    const [isDeletingTask, setDeletingTask] = React.useState(false);

    const tasksCount = tasks.filter((task) => task.state === TaskState.Created).length;
    const concludedTasksCount = tasks.filter((task) => task.concluded).length;

    function prepareTask() {
        setTasks([...tasks, {
            id: Math.random().toString(36).substring(2, 9),
            title: "",
            state: TaskState.Creating
        }])
    }

    async function updateTask(id: string, payload: { title: Task["title"] }) {
        setUpdatingTask(true);
        await delay(1000);
        setTasks(
            tasks.map((task) => task.id === id ? { ...task, state: TaskState.Created, ...payload } : task)
        )
        setUpdatingTask(false);
    }

    function updateTaskStatus(id: string, concluded: boolean) {
        setTasks(
            tasks.map((task) => task.id === id ? { ...task, concluded } : task)
        );
    }

    async function deleteTask(id: string) {
        setDeletingTask(true);
        await delay(1000);
        setTasks(tasks.filter((task) => task.id !== id))
        setDeletingTask(false);
    }


    return {
        prepareTask,
        updateTask,
        updateTaskStatus,
        deleteTask,
        tasksCount,
        concludedTasksCount,
        isUpdatingTask,
        isDeletingTask
    }
}