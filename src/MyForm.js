import { useState } from "react";

export default function MyForm() {
    //const [nameInput, setNameInput] = useState("");
    //const [emailInput, setEmailInput] = useState("");

    const [formInputs, setFormInput] = useState({
        name: "",
        email: "",
        age: "",
        generalInfo: "",
        isStudent: false,
    });
    function handlCheckedBoxChanged(event) {
        //console.log(event.target.checked, "is the value from checkBox");
        setFormInput({ ...formInputs, isStudent: event.target.checked });
    }

    return (
        <form className="form-container" onSubmit={(event => {
            event.preventDefault();
            console.log(formInputs);
        })}>
            <label className="form-label">Name :</label>
            <input className="form-input" value={formInputs.name} onChange={(event) => {
                setFormInput({ ...formInputs, name: event.target.value });
            }} />

            <hr className="form-divider" />

            <label className="form-label">Email :</label>
            <input className="form-input" type=" email" cvalue={formInputs.email} onChange={(event) => {
                setFormInput({ ...formInputs, email: event.target.value });
            }} />

            <hr className="form-divider" />

            <label className="form-label">Age :</label>
            <input className="form-input"
                type="number" value={formInputs.age} onChange={(event) => {
                    setFormInput({ ...formInputs, age: event.target.value });
                }} />

            <hr className="form-divider" />
            <div className="checkbox-container">
                <label className="form-label checkbox-label">Are You Student</label>
                <input type="checkbox" checked={formInputs.isStudent} onChange={handlCheckedBoxChanged} />
            </div>
            <hr className="form-divider" />
            <div>
                <label className="form-label">General Info :</label>
                <textarea className="form-input textarea-input" value={(formInputs.generalInfo)} onChange={(event) => {
                    setFormInput({ ...formInputs, generalInfo: event.target.value });
                }}
                /></div>

            <hr className="form-divider" />


            <button className="form-button" type="submit">Submit</button>

            <hr />

        </form>
    );
}