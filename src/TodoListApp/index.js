import React from 'react';
import './_styles/styles.scss';
import {
    GroupList, TaskList
} from "../components";

export default function TodoListApp() {
    const [groups, setGroups] = React.useState([]);
    const [selectedGroup, setSelectedGroup] = React.useState(null);

    return (
        <main>
            <GroupList
                title="Todo List"
                description="Add a group to start planning your tasks"
                groups={groups}
                setGroups={setGroups}
                setSelectedGroup={setSelectedGroup}
            />
            <TaskList
                groups={groups}
                selectedGroup={selectedGroup}
                setGroups={setGroups}
            />
        </main>
    );
}