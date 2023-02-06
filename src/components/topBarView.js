function TopBarView(props) {
    return (
        <div>
            <h1 id={"siteTitle"}>BRINGO</h1>
            <button onClick={goHomeACB}>Start</button>
            {props.userLoggedIn ? <button onClick={accountClickACB}>Account</button> :
                <button onClick={accountClickACB}>Log in</button>}
            <div className="groupDropdown">
                <button className="dropButton">Groups</button>
                <div className="dropdownContent">
                    {props.userLoggedIn ?
                        props.groups.map(renderGroupOptionsCB) : ""}
                </div>

            </div>

        </div>
    )

    function goHomeACB() {
        props.navigate("/");
    }

    function accountClickACB() {
        props.userLoggedIn ? props.navigate("/account") : props.navigate("/login")
    }

    function renderGroupOptionsCB(group) {
        return (
            <a onClick={() => {props.navigate("/" + group.name)}}>{group.name}</a>
        )
    }
}

export default TopBarView;
