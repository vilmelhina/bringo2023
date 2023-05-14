function GroupPageHandleCellsView(props){

    return (
        <div>
            <h2>{props.groupName}</h2>
            <button onClick={props.close}>close</button>
            <h3>Handle cells</h3>
        </div>
    );
}
export default GroupPageHandleCellsView;