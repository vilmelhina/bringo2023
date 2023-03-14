function TopBarView(props) {
    return (
        <div id="top-bar">
            <h1 id="site-title">BRINGO</h1>
            <div id="top-bar-menu">
                {props.getLink("/start", "start")}
                {props.userLoggedIn ? props.getLink("/account", "account") :
                    props.getLink("/login", "log in")}
                <div className="group-dropdown">
                    <span className="dropdown-button">groups</span>
                    <div className="dropdown-content">
                        {props.userLoggedIn ?
                            props.groups.map(renderGroupOptionsCB) : ""}
                    </div>
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
