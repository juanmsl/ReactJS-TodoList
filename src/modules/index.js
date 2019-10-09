import React from 'react';
import 'scss/styles.scss';
import {
    GroupList, TaskList
} from "components";

export default function TodoListApp() {
    const [groups, setGroups] = React.useState([]);
    const [selectedGroup, setSelectedGroup] = React.useState(null);

    const updateSelectedGroup = (group) => {
        const newGroups = [...groups];
        newGroups[selectedGroup] = group;
        setGroups(newGroups);
    };

    return (
        <main className="todolist-app">
            <GroupList
                title="Todo List"
                description="In this list you can add a project to start planning your tasks about it"
                groups={groups}
                setGroups={setGroups}
                selectedGroup={selectedGroup}
                setSelectedGroup={setSelectedGroup}
            />
            <TaskList
                group={groups[selectedGroup]}
                updateSelectedGroup={updateSelectedGroup}
            />
        </main>
    );
}