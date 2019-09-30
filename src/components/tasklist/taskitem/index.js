import React from 'react';

export default function TaskItem(props) {
    const {text, done, toggleDone} = props;

    return (
        <section onClick={toggleDone}>{text} {done ? "done" : "not done"}</section>
    );
}