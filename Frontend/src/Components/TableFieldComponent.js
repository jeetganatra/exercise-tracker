import React from "react"
import { Link } from 'react-router-dom';

const TableField = (props) => {
    //console.log(props);
    return (
        <tr>
            <td>{props.serial}</td>
            <td>{props.username}</td>
            <td>{props.description}</td>
            <td>{props.duration}</td>
            <td>{props.date.substring(0,10)}</td>
            <td>
                <Link to={{
                    pathname:"/edit/"+props.id,
                    userProps:{
                        username:props.username,
                        description:props.description,
                        duration:props.duration
                    }
                }}>edit</Link> | <a href="#" onClick={()=>{props.deleteUser(props.id,props.userId)}}>delete</a>
            </td>
        </tr>
    )
}

export default TableField