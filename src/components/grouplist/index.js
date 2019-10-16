import React from 'react';
import GroupItem from "./groupitem";

export default function GroupList(props) {
    const {title, description, groups, setGroups, selectedGroup, setSelectedGroup} = props;
    const [inputValue, setInputValue] = React.useState("");

    const [disableAddButton, isDisableAddButton] = [inputValue ? "" : "disabled", !inputValue];
    const [disableDeleteAllButton, isDisableDeleteAllButton] = [groups.length ? "" : "disabled", !groups.length];

    const renderGroups = () => {
        return groups.map((group, i) => (
            <GroupItem
                key={i}
                onClick={() => {
                    setSelectedGroup(i)
                }}
                selected={selectedGroup === i}
                {...group}
            />
        ));
    };

    const handleInput = (e) => {
        e.preventDefault();
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue) return;
        const group = {
            text: inputValue,
            tasks: []
        };
        setGroups([...groups, group]);
        setSelectedGroup(groups.length);
        setInputValue("");
    };

    const deleteGroupListItem = (e) => {
        e.preventDefault();
        groups.splice(selectedGroup, 1);
        setGroups(groups);
        setSelectedGroup(null);
    };

    const deleteAll = (e) => {
        e.preventDefault();
        setGroups([]);
        setSelectedGroup(null);
        setInputValue("");
    };

    return (
        <form onSubmit={handleSubmit} className="group-list">
            <section>
                <h1 className="main-title">{title}</h1>
                <p className="description">{description}</p>
                <input type="text" onChange={handleInput} value={inputValue} className="input"/>
                <section className="group-list__buttons">
                    <button onClick={handleSubmit} className={`button ${disableAddButton}`} disabled={isDisableAddButton}>Add</button>
                    <button onClick={deleteAll} className={`button danger ${disableDeleteAllButton}`} disabled={isDisableDeleteAllButton}>Delete all</button>
                </section>
            </section>
            <section className="group-list__items">{renderGroups()}</section>
            {(groups.length) ? <button type="button" className="delete-icon" onClick={deleteGroupListItem}>Delete Group </button> : null}
        </form>
    );
}

GroupList.defaultProps = {
    groups: []
};