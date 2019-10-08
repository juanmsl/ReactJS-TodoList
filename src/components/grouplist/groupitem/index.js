import React from 'react';

export default function GroupItem(props) {
    const {text, tasks, onClick, selected} = props;

    return (
        <section onClick={onClick} className={`group-list__item ${selected ? "selected" : ""}`}>
            <span>{text}</span>
            <span>{tasks.length}</span>
        </section>
    );
}