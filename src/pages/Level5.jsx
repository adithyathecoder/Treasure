import "../styles/Level5.css"
import level5img from "../assets/q5.png"
import { useFirebase } from "../context/firebase";
import { useState,useEffect } from "react";


const Level5 = ({user}) => {
    const [l5answer, setl5answer] = useState("")
    const [answer,setAnswer] = useState("");



    const firebase = useFirebase();

    useEffect(() => {
        firebase.fetchData("answers").then(
            data => {
                const level5answer = data.level5;
                // console.log(level5answer);
                setl5answer(level5answer);
                // console.log(l5answer);
            }
        )
    }, [firebase]);


    const checkAnswer = () => {

        // addToDo(task)
        // alert(l5answer);
        if (answer.toUpperCase() === l5answer) {
            alert("Congratulation You are Now a Certified Aviation Geek !");
            const now = new Date();
            if(user){
            firebase.putData('users' + user.uid, { level : 5,endTime:{now}});
            setTimeout(() => {return(window.location.href = "/Certificate");},2000
            );}

        } else {
            alert("Try Again! Answer the Full Key");
            // if(task.equalsIgnoreCase()) 
            // addToDo("Try Again") 
        }
    }

return(

    <div>
    <h1 className="level5text">Congratuation ! <br/>
    You made it this Far<br/> 
    To the Final Showdown<br/>
    Stage 5: The Final Treasure <br/>
    A printed message contains in each of 3 boxes<br/>
    The first box says 'The Gold is not here'.<br/>
    The Second box says 'The Gold is not here'.<br/>
    The Third box says 'The Gold is in the Second here'.<br/>
    One of the message is true and the other two are lies <br/>
    Which Box has gold ? <br/>
    </h1>
    <div className="level5-riddle-container">

    </div>
    <div>
        <img src={level5img} alt="not found" className="level5-img"/>
        {/* <button onClick={handleThrottleClick} className="throttle">Throttle up</button> */}
    </div>
    <div className="level5-button-container">
        <input onChange={e => setAnswer(e.target.value)} className="level5-input" type = "text"placeholder="Say my Name !"></input>
        <button onClick={checkAnswer}className="level5-button">Submit</button>
    </div>
</div>
)



}

export default Level5;
