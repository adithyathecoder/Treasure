import { useFirebase } from "../context/firebase";
import "../styles/Level3.css"
import { useState } from "react";



const Level3 = ({user}) => {
    const [row1, setRow1] = useState(["",]);
    const [colorcell1, setColorcell1] = useState("bisque")
    const [colorcell2, setColorcell2] = useState("bisque")
    const [colorcell3, setColorcell3] = useState("bisque")
    const [colorcell4, setColorcell4] = useState("bisque")

    const firebase = useFirebase();

    const handleRow1Change = (e, index) => {
        const newValue = (e.target.value);
        setRow1((prevRow1) => {
            const newRow1 = [...prevRow1];
            newRow1[index] = newValue;
            return newRow1;
        });
    };

    const handleCheckRow1 = () => {
        // console.log("here", row1[0]);
        // console.log(row1[0]);

        if (row1[0] == "HOW" || row1[0] == "how" || row1[0] == "How") {
            setColorcell1("green")
        } else { setColorcell1("red") }

        // if (row1[1] == 5 ||row1[1] == 0) {
        //     setColorcell2("green")
        // } else { setColorcell2("red") }

        if (row1[2] == "are"||row1[2] == "Are" || row1[2] == "ARE") {
            setColorcell3("green")
        } else { setColorcell3("red") }

        if (row1[3] == "you" || row1[3] == "u" ||row1[3] =="YOU" || row1[3] =="U" || row1[3] =="You") {
            setColorcell4("green")
        } else { setColorcell4("red") }



        if ((row1[0] == "HOW" || row1[0] == "how" || row1[0] == "How")  && (row1[2] == "are"||row1[2] == "Are" || row1[2] == "ARE") && (row1[3] == "you" || row1[3] == "u" ||row1[3] =="YOU" || row1[3] =="U" || row1[3] =="You")) {
            if(user){
            firebase.putData('users' + user.uid, { level : 3});
            setTimeout(() => {return(window.location.href = "/level5");},1500
            );}
        }
        if((row1[0] == "HOW" || row1[0] == "how" || row1[0] == "How")  && (row1[2] == "do"||row1[2] == "Do")){
            if(user){
                firebase.putData('users' + user.uid, { level : -1});
                setTimeout(() => {return(window.location.href = "/deadend");},1500
                );}
        }
        // console.log(row1);
    };


    return (
        <div>
            <div className="level3-pretext"><h1> Stage 3: The Text Game  
                    <br />Make a intelligent guess <br/>
                    There are three input fields<br/>
                    If you are right the input turns green<br/>
                    <p className="level3-instruction">Clue : <br/><br/>
                    the old style of writing input, <br/>
                    Mr. pekka lundmark akka<br/>
                    the message is : 446669027733099966688 </p>         
                    </h1></div>
            <div className="hyper-backdrop"></div>
            {/* <div className=""></div> */}
            <div className="crossword">
                <div className="row">
                    <input
                        type="text"
                        className="cell"
                        style={{ backgroundColor: colorcell1}}
                        // value={row1[0]}
                        onChange={(e) => handleRow1Change(e, 0)}
                        maxLength="1" 
                        pattern="[a-zA-Z0-9]"
                    />
                    <input
                        type="text"
                        className="cell"
                        style={{ backgroundColor: colorcell2 }}
                        value= "-"
                        onChange={(e) => handleRow1Change(e, 1)}
                        disabled
                    />
                    <input
                        type="text"
                        className="cell"
                        style={{ backgroundColor: colorcell3 }}
                        // value={row1[2]}
                        onChange={(e) => handleRow1Change(e, 2)}
                        maxLength="1" 
                        pattern="[a-zA-Z0-9]"
                    />
                    <input
                        type="text"
                        className="cell"
                        style={{ backgroundColor: colorcell4 }}
                        // value={row1[3]}
                        onChange={(e) => handleRow1Change(e, 3)}
                        maxLength="1" 
                        pattern="[a-zA-Z0-9]"
                    />
                    <button className="wordle-check-button" onClick={handleCheckRow1}>✔
                    </button>
                </div>
            </div>
        </div>


    )

}

export default Level3;
