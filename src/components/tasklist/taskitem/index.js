import React from 'react';

export default function TaskItem(props) {
    const {text, done, toggleDone} = props;

    return (
        <section onClick={toggleDone} className={`task-list__item ${done ? "done" : ""}`}>
            {text}
        </section>
    );
}