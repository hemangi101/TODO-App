import { MdDelete } from "react-icons/md";
function Todoitem({todoName, todoDate,onDeleteClick}) {

  return   <div className="items-container ">
  <div className="kg-row row">
    <div className="col-6">{todoName} </div>
    <div className="col-4">{todoDate}</div>
    <div className="col-2"><button type="button" className="btn btn-danger kg-button button" onClick={() => onDeleteClick(todoName)}>
    <MdDelete  className="icon"/>
      </button>
    </div>

  </div>
</div>
}
export default Todoitem;