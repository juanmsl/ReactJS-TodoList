import React from 'react';
import TaskItem from "./taskitem";

export default function TaskList(props) {
    const {group, updateSelectedGroup} = props;
    const [inputValue, setInputValue] = React.useState("");

    const renderTasks = () => {
        if (group) {
            return group.tasks.map((task, i) => {
                return <TaskItem
                    key={i}
                    {...task}
                    toggleDone={() => {
                        group.tasks[i].done = !task.done;
                        updateSelectedGroup(group);
                    }}
                />;
            });
        }
        return <p>No project selected</p>
    };

    const handleInput = (e) => {
        e.preventDefault();
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue) return;
        const task = {
            text: inputValue,
            done: false
        };
        const {tasks} = group;
        group.tasks = [...tasks, task];
        updateSelectedGroup(group);
        setInputValue("");
    };

    const deleteAll = (e) => {
        e.preventDefault();
        group.tasks = [];
        updateSelectedGroup(group);
        setInputValue("");
    };

    if(!group) {
        return (
            <section className="task-list">
                <p>No project selected</p>
            </section>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="task-list">
            <section>
                <h2>{group.text}</h2>
                <section className="task-list__buttons">
                    <input type="text" onChange={handleInput} value={inputValue} className="input"/>
                    <button onClick={handleSubmit} className={`button`}>Add</button>
                    <button onClick={deleteAll} className={`button danger`}>Delete all</button>
                </section>
            </section>
            <section className="task-list__items">{renderTasks()}</section>
        </form>
    );
}

TaskList.defaultProps = {
    tasks: []
};