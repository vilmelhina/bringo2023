import picture from '../temporary_picture.png';
function AccountPageView(props) {

    // TODO: fix group dropdown going outside window

    function renderGroups() {
        if(props.groups)
            return props.groups.map(renderGroup)
        else return "no groups"
    }

    function renderGroup(group) {
        return <button key={group.id} onClick={() => {props.onSetGroup(group.id)}}>
                    {group.name}
                </button>
    }

    return (
        <div id="account-container">
            <div id="name-and-picture">
                <img src={picture} alt="temp"/>
                <h2 className="display-name">{props.userDisplayName}</h2>
                <span className="email">{props.userEmail}</span>
            </div>
            <div id="options">
                <div className="option-group">
                        <h3>Account Settings</h3>
                        <p>Not implemented</p>
                </div>
                <div className="option-group">
                    <h3>Manage Groups</h3>
                    {renderGroups()}
                </div>
            </div>
            <div id="buttons">
                <button onClick={props.onLogOut}>Log out</button>
            </div>
        </div>
    );
}
export default AccountPageView;