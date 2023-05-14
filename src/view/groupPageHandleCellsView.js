function GroupPageHandleCellsView(props){

    function cellListing(cell, key) {
        return <div key={key}>
            <span>{cell}</span>
            <button onClick={() => props.removeCell(cell)}>delete</button>
        </div>
    }

    function addCellClicked() {
        props.addCell(document.getElementById("addCellTextArea").value)
        document.getElementById("addCellTextArea").value = ""
    }

    return (
        <div>
            <h2>{props.groupName}</h2>
            <button onClick={props.close}>close</button>
            <h3>Handle cells</h3>
            <div>
                <h4>Add new cell</h4>
                <textarea id="addCellTextArea" placeholder="Type here..."/>
                <button onClick={addCellClicked}>Add cell</button>
            </div>
            <div>
                <h4>Cells</h4>
                {props.cells.map(cellListing)}
            </div>
        </div>
    );
}
export default GroupPageHandleCellsView;