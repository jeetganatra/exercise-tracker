import React from "react"

const CreateUserComponent = () => {
    const [userName,setUserName] = React.useState("");

    const handleOnChange = (event) =>{
        const newUser = event.target.value;
        setUserName(newUser);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const newAddedUser = {
            username:userName
        }
        axios.post("http://localhost:5000/user/add",newAddedUser)
             .then(()=>{
                 //set ALERT to true later here
                 setUserName("");
                 console.log("new user added");
             })
             .catch(err => {
                console.log(err);
            });
    }

    return(
        <div>
            <h1>Create new User here</h1>
            <form onSubmit={handleOnSubmit}>
                <div class="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter a user name" onChange={handleOnChange} value={userName}></input>
                </div>
                <button type="submit" class="btn btn-dark">Submit</button>
            </form>
        </div>
    )
}

export default CreateUserComponent;