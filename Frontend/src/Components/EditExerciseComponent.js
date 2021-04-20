import axios from "axios"
import React from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const UpdateExerciseComponent = (props) => {
    //console.log(props);
    const [exerciseLog,setExerciseLog] = React.useState({
        username:props.location.userProps.username,
        description:"",
        duration:0,
        date: new Date()
    })

    const handleOnChange = (event) => {
        const {name,value} = event.target;
        setExerciseLog((prevValue)=>{
            return{
                ...prevValue,
                [name] : value
            }
        })
    }

    const handleOnChangeDate = (date) => {
        setExerciseLog((prevValue)=>{
            return{
                ...prevValue,
                date : date
            }
        })
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        //post request to the node server
        const exercise = {
            username:exerciseLog.username,
            description:exerciseLog.description,
            duration:exerciseLog.duration,
            date:exerciseLog.date
        }
        console.log(exercise);
        axios.patch("http://localhost:5000/exercises/update/"+props.match.params.id,exercise)
             .then((res)=>console.log(res.data))
             .catch(err => {
                console.log(err);
            })

            window.location = "/"
    }

    return(
        <div>
            <h1>Create new exercise here..</h1>
            <form onSubmit={handleOnSubmit}>
                <div class="form-group">
                    <label for="username">Username:</label>
                    <select class="form-control" required name="username" onChange={handleOnChange}>               
                        <option value={exerciseLog.username}>{exerciseLog.username}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="description">Description:</label>
                    <input type="text" name="description" class="form-control" id="description" placeholder="Type of exercise like cycling,jogging etc." onChange={handleOnChange} value={exerciseLog.description}></input>
                </div>
                <div class="form-group">
                    <label for="duration">Duration:</label>
                    <input type="text" name="duration" class="form-control" id="duration" placeholder="Enter in minutes" onChange={handleOnChange} value={exerciseLog.duration}></input>
                </div>
                <div class="form-group">
                    <label for="date">Date:</label>
                    <div>
                        <DatePicker selected={exerciseLog.date} onChange={handleOnChangeDate} />
                    </div>
                </div>
                <button type="submit" class="btn btn-dark">Submit</button>
            </form>
        </div>
    )
}

export default UpdateExerciseComponent;