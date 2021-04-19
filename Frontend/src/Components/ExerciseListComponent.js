import axios from "axios";
import React from "react"
import Table from 'react-bootstrap/Table'
import TableField from "./TableFieldComponent"

const ExerciseListComponent = () => {
    const [exerciseLog,setExerciseLog] = React.useState([]);

    React.useEffect(()=>{
        axios.get("http://localhost:5000/exercises/")
            .then((res)=>{
                setExerciseLog(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    },[])

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
                                    <TableField username={item.username} description={item.description} duration={item.duration} serial={index} date={item.date} />
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