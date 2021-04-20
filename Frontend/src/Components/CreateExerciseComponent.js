import axios from "axios"
import React from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const CreateExerciseComponent = () => {
    const [exerciseLog,setExerciseLog] = React.useState({
        username:"please select from below",
        description:"",
        duration:0,
        date: new Date(),
        userId:""
    })

    const [users,setUsers] = React.useState([])

    React.useEffect(()=>{
        axios.get("http://localhost:5000/users/")
            .then((res)=>{
                setUsers(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    },[])

    const handleOnChange = (event) => {
        const {name,value} = event.target;
        setExerciseLog((prevValue)=>{
            return{
                ...prevValue,
                [name] : value
            }
        })
    }

    const handleOnChangeUsername = (event) => {
        console.log(event.target.selectedOptions[0].id);
        setExerciseLog((prevValue)=>{
            return{
                ...prevValue,
                username:event.target.value,
                userId:event.target.selectedOptions[0].id
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
            date:exerciseLog.date,
            userId:exerciseLog.userId
        }
        axios.post("http://localhost:5000/exercises/add",exercise)
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
                    <select class="form-control" required name="username" onChange={handleOnChangeUsername}>
                        <option selected>Please select a user from below:</option>
                        {
                            users.map(user => {
                                return (
                                    <option value={user.username} id={user._id}>{user.username}</option>
                                )
                            })
                        }
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

export default CreateExerciseComponent;