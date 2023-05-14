import styles from "../styles/topBar.module.css";

function TopBarView(props) {
    return (
        <div id={styles.topBar}>
            <h1>BRINGO</h1>
            <div id={styles.topBarMenu}>
                {props.getLink("/start", "start")}
                {props.userLoggedIn ? props.getLink("/account", "account") :
                    props.getLink("/login", "log in")}
                {props.userLoggedIn ? <div className={styles.groupDropdown}>
                    <span className={styles.dropdownButton}>groups</span>
                    <div className={styles.dropdownContent}>
                        {props.groups.map(renderGroupOptionsCB)}
                    </div>
                </div> : ""}
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
