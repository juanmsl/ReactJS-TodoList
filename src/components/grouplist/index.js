import React from 'react';
import GroupItem from "./groupitem";

export default function GroupList(props) {
    const {title, description, groups, setGroups, setSelectedGroup} = props;
    const [inputValue, setInputValue] = React.useState("");

    const renderGroups = () => {
        return groups.map((group, i) => {
            return <GroupItem key={i} {...group}
                onClick={() => {setSelectedGroup(i)}}
            />;
        });
    };

    const handleInput = (e) => {
        e.preventDefault();
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const group = {
            text: inputValue,
            tasks: []
        };
        setGroups([...groups, group]);
        setInputValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>{title}</h1>
            <p>{description}</p>
            <input type="text" onChange={handleInput} value={inputValue}/>
            <section>{renderGroups()}</section>
        </form>
    );
}

GroupList.defaultProps = {
    groups: []
};