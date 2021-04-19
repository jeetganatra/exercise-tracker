import React from "react"

const TableField = (props) => {
    return (
        <tr>
            <td>{props.serial}</td>
            <td>{props.username}</td>
            <td>{props.description}</td>
            <td>{props.duration}</td>
            <td>{props.date.substring(0,10)}</td>
        </tr>
    )
}

export default TableField