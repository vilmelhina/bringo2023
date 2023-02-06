function TopBarView(props) {
    return (
        <div>
            <h1 id="siteTitle">BRINGO</h1>
            {props.getLink("/start", "start")}
            {props.userLoggedIn ? props.getLink("/account", "account") :
                props.getLink("/login", "log in")}
            <div className="groupDropdown">
                <button className="dropButton">Groups</button>
                <div className="dropdownContent">
                    {props.userLoggedIn ?
                        props.groups.map(renderGroupOptionsCB) : ""}
                </div>

            </div>

        </div>
    )

    function renderGroupOptionsCB(group) {
        return (
            props.getLink("group", group.name, group.id)
        )
    }
}

export default TopBarView;
