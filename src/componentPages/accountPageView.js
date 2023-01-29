function AccountPageView(props) {

    function renderGroups() {
        if(props.groupsMember || props.groupsAdmin)
            return [...props.groupsMember.map(renderGroup), ...props.groupsAdmin.map(renderGroup)]
        else return "no groups"
    }

    function renderGroup(group) {
        return <button key={group.id} onClick={() => {props.onSetGroup(group.id)}}>
                    {group.name}
                </button>
    }

    return (
        <div>
            <p>{props.userId}</p>
            <p>{props.userEmail}</p>
            <p>{props.userDisplayName}</p>
            <h2>Groups:</h2>
            <div>{renderGroups()}</div>
            <p>
                <button onClick={props.onLogOut}>Log out</button>
            </p>
        </div>
    );
}
export default AccountPageView;