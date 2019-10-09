import React from 'react';

export default function GroupItem(props) {
    const {text, tasks, onClick, selected} = props;

    const getDoneTaskCount = () => {
        return tasks.filter((task) => {
            return task.done;
        }).length;
    };

    return (
        <section onClick={onClick} className={`group-list__item ${selected ? "selected" : ""}`}>
            <span>{text}</span>
            <span>{getDoneTaskCount()}/{tasks.length}</span>
        </section>
    );
}