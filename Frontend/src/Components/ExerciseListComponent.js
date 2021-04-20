import axios from "axios";
import React from "react"
import Table from 'react-bootstrap/Table'
import TableField from "./TableFieldComponent"

const ExerciseListComponent = () => {
    const [exerciseLog,setExerciseLog] = React.useState([]);
    const [alert,setAlert] = React.useState(true);

    React.useEffect(()=>{
        if(!alert){
           return;
        }
        axios.get("http://localhost:5000/exercises/")
            .then((res)=>{
                setExerciseLog(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    },[alert])

    React.useEffect(()=>{
        if(alert){
            setAlert(false);
        }
    },[alert])

    const deleteUserExercise = (id,userId) => {
        axios.delete("http://localhost:5000/exercises/"+id)
            .then(()=>{
                 setAlert(true);
                 console.log("deleted");
            })
            .catch(err => {
                console.log(err);
            })
        axios.delete("http://localhost:5000/users/" + userId)
            .then(() => {
                console.log("user deleted");
            })
            .catch(err => {
                console.log(err);
            })
    }

    return(
        <div>
            <h1>Exercise Logs Table. Get back to work!!!</h1>
            <div className="margins">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            exerciseLog.map((item,index)=>{
                                return(
                                    <TableField id={item._id} username={item.username} userId={item.userId} description={item.description} duration={item.duration} serial={index} date={item.date} deleteUser={deleteUserExercise} />
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </div>
        
    )
}

export default ExerciseListComponent;