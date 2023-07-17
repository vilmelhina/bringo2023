function StartPageView(props){

    function createGroupClickedACB() {
        props.createGroup(document.getElementById("groupNameTextArea").value)
        document.getElementById("groupNameTextArea").value = ""
    }

    return (
        <div>
            helloStartPage
            {props.userLoggedIn ? <div>
                <input type="text" placeholder="Group Name" id="groupNameTextArea"/>
                <button onClick={createGroupClickedACB}>Submit</button>
            </div> : ""}
        </div>
    );
}
export default StartPageView;