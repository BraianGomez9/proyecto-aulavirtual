import { useState, useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import { useNavigate } from "react-router";
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

        alert("Login exitoso 🎉");
        navigate("/");
    };

    return (
        <div>
            <Navbar />
            <h2>Iniciar sesión</h2>

            <form onSubmit={handleSubmit}>
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
    );
};

export default Login;
