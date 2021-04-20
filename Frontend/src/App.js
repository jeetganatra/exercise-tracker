import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route} from "react-router-dom";


import Navbar from "./Components/Navbar"
import EditExercise from "./Components/EditExerciseComponent"
import ExerciseList from "./Components/ExerciseListComponent"
import CreateUser from "./Components/CreateUserComponent"
import CreateExercise from "./Components/CreateExerciseComponent"

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Route path="/" exact component={ExerciseList} />
        <Route path="/edit/:id" exact component={EditExercise} />
        <Route path="/createExercise" exact component={CreateExercise} />
        <Route path="/createUser" exact component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
