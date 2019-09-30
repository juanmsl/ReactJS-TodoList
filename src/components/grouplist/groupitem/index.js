import React from 'react';

export default function GroupItem(props) {
    const {text, tasks, onClick} = props;

    return (
        <section onClick={onClick}>{text} {tasks.length}</section>
    );
}