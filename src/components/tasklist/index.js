import React from 'react';
import TaskItem from "./taskitem";

export default function TaskList(props) {
    const {groups, selectedGroup, setGroups} = props;
    const [inputValue, setInputValue] = React.useState("");

    const renderTasks = () => {
        if (selectedGroup !== null) {
            const tasks = groups[selectedGroup].tasks;
            return tasks.map((task, i) => {
                return <TaskItem
                    key={i}
                    {...task}
                    toggleDone={() => {
                        groups[selectedGroup].tasks[i].done = !task.done;
                        setGroups([...groups]);
                    }}
                />;
            });
        }
        return <p>No group selected</p>
    };

    const handleInput = (e) => {
        e.preventDefault();
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = {
            text: inputValue,
            done: false
        };
        const tasks = groups[selectedGroup].tasks;
        groups[selectedGroup].tasks = [...tasks, task];
        setGroups([...groups]);
        setInputValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            {selectedGroup !== null ? <input type="text" onChange={handleInput} value={inputValue}/> : null }
            <section>{renderTasks()}</section>
        </form>
    );
}

TaskList.defaultProps = {
    tasks: []
};