import { useState } from "react";
//let name = "chouaib ";

export default function MyButton() {
    console.log("render");
    const [name, setName] = useState("chouaib");

    function buttonClicked() {
        if (name === "ghali") {
            setName("chouaib")
        } else {
            setName("ghali");
        }

    }

    return (
        <div>
            <button onClick={buttonClicked}>Click Me</button>
            <h1>{name}</h1>
        </div>
    )
};
