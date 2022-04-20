import React from "react";
import {Link} from "react-router-dom";

const ProductTerm = (props) => {
    return (
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.category}</td>
            <td>{props.term.availableCopies}</td>
            <td className={"text-right"}>
                <a title={"Delete"} className={"btn btn-outline-danger"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>
            </td>
            <td>
                <Link className={"btn btn-outline-info ml-2"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/books/edit/${props.term.id}`}>
                    Edit
                </Link>
            </td>
            <td>
                <a title={"Mark As Taken"} className={"btn btn-outline-success"}
                   onClick={() => props.onMark(props.term.id)}>
                    Mark As Taken
                </a>
            </td>
        </tr>
    )
}
export default ProductTerm;