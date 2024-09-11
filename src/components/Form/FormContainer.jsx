import { useState } from "react"
import "../Form/FormContainer.css"

export const FormContainer = () => {
    try {
        const [valuer, setValuer] = useState({
            name: "",
            email: "",
            phone: ""
        })

        const handleForm = (e) => {
            e.preventDefault()
            console.log("esto son los valores", valuer)
        }
        const handleValuer = (e) => {
            setValuer({ ...valuer, [e.target.name]: e.target.value })
        }
        //console.log("name", valuer.name, "email", valuer.email, "phone", valuer.phone)
        return (
            <form className="FormContainer" onSubmit={handleForm}>
                <label htmlFor="name">Name:</label>
                <input type="text" placeholder="Enter your name" name="name" id="name" required className="InputField" value={valuer.name} onChange={handleValuer} />

                <label htmlFor="email">Email:</label>
                <input type="email" placeholder="Enter your email" name="email" id="email" required className="InputField" value={valuer.email} onChange={handleValuer} />

                <label htmlFor="phone">Phone:</label>
                <input type="number" placeholder="Enter your phone" name="phone" id="phone" required className="InputField" value={valuer.phone} onChange={handleValuer} />

                <button type="submit">Send</button>
            </form>
        )

    } catch (error) {
        console.log("Hubooo un error en form")
    }
}