function AccountPageView(props){
    return (
        <div>
            <p>{props.userId}</p>
            <p>{props.userEmail}</p>
            <p>{props.userDisplayName}</p>

            <button onClick={props.onLogOut}>Log out</button>
        </div>
    );
}
export default AccountPageView;