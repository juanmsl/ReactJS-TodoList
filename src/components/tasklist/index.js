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
        const tasks = groups[selectedGroup].tasks;
        groups[selectedGroup].tasks = [...tasks, task];
        setGroups([...groups]);
        setInputValue("");
    };

    const deleteAll = (e) => {
        e.preventDefault();
        groups[selectedGroup].tasks = [];
        setGroups([...groups]);
        setInputValue("");
    };

    return (
        <form onSubmit={handleSubmit} className="task-list">
            <section>
                {selectedGroup !== null ? <h2>{groups[selectedGroup].text}</h2> : null }
                {selectedGroup !== null ? (
                    <section className="task-list__buttons">
                        <input type="text" onChange={handleInput} value={inputValue} className="input"/>
                        <button onClick={handleSubmit} className={`button`}>Add</button>
                        <button onClick={deleteAll} className={`button danger`}>Delete all</button>
                    </section>
                    ) : null }
            </section>
            <section className="task-list__items">{renderTasks()}</section>
        </form>
    );
}

TaskList.defaultProps = {
    tasks: []
};