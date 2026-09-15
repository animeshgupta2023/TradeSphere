import { useState } from "react"
import "./Signup.css"

export default function Signup(){
    const [mode, setMode] = useState("signup")
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    })
    const [error, setError] = useState("")

    const isLogin = mode === "login"

    const handleSubmit = async (event) =>{
        event.preventDefault()
        setError("")

        const endpoint = isLogin ? "login": "signup"

        const payload = isLogin
        ? {email: form.email, password: form.password}
        : form

        try{
            const response = await fetch(`http://localhost:8080/auth/${endpoint}`,{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(payload),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || "Authentication failed");
            }

            window.location.href = "http://localhost:5174" 
        } catch(err){
            setError(err.message)
            throw(err)
        }
    }

    return (
        <div className="signup-page">
            <form onSubmit={handleSubmit} className="signupForm">
                <div className="mode-toggle">
                <label className={!isLogin ? "active" : ""}>
                    <input
                    type="radio"
                    name="mode"
                    value="signup"
                    checked={mode === "signup"}
                    onChange={(e) => {
                        setMode(e.target.value)
                        setError("")
                    }}
                    />
                    Sign up
                </label>

                <label className={isLogin ? "active" : ""}>
                    <input
                    type="radio"
                    name="mode"
                    value="login"
                    checked={mode === "login"}
                    onChange={(e) => {
                        setMode(e.target.value)
                        setError("")
                    }}
                    />
                    Log in
                </label>
                </div>

                {/* ----- Name only shown for signup ----- */}
                {!isLogin && (
                <input
                    placeholder="Name"
                    value={form.name}
                    onChange={(event) =>
                    setForm({ ...form, name: event.target.value })
                    }
                />
                )}

                <input
                placeholder="Email"
                type="email"
                value={form.email}
                onChange={(event) =>
                    setForm({ ...form, email: event.target.value })
                }
                />

                <input
                placeholder="Password"
                type="password"
                value={form.password}
                onChange={(event) =>
                    setForm({ ...form, password: event.target.value })
                }
                />

                {error && <p>{error}</p>}

                <button type="submit">
                {isLogin ? "Log in" : "Create account"}
                </button>
            </form>
        </div>
    )
}