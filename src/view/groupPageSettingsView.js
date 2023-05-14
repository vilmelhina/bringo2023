function GroupPageSettingsView(props){

    return (
        <div>
            <h2>{props.groupName}</h2>
            <button onClick={props.close}>close</button>
            <h3>Settings</h3>
        </div>
    );
}
export default GroupPageSettingsView;