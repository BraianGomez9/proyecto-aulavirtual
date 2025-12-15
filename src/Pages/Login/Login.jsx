import { useState, useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import { useNavigate } from "react-router";
import "../../main.css"


import Navbar from "../../components/Navbar/Navbar";

const Login = () => {
    const { login } = useContext(UserContext);

    const [form, setForm] = useState({
        username: "",
        password: "",
    });

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        const success = login(form.username, form.password);

        if (!success) {
            alert("Usuario o contraseña incorrectos");
            return;
        }


        const savedUser = JSON.parse(localStorage.getItem("currentUser"));

        if (savedUser.role === "admin") {
            navigate("/admin/altaproductos");
        } else {
            navigate("/");
        }
    };


    return (
        <div className="login-container">
            <Navbar />

            <div className="login-card">
                <h2>Iniciar sesión</h2>
                <div>usuario: admin, contraseña: admin</div>
                <p>usuario:user, contraseña: 1234</p>
                <form onSubmit={handleSubmit} className="login-form">
                    <input
                        type="text"
                        placeholder="Usuario"
                        value={form.username}
                        onChange={(e) => setForm({ ...form, username: e.target.value })}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                        required
                    />

                    <button type="submit">Entrar</button>
                </form>
            </div>
        </div>
    );

};

export default Login;
