import { TextField, Box, Button, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./../registerPage/style.css";
import { FormError } from "../../components/errors/Errors";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../components/providers/AuthProvider";
import {useDispatch} from "react-redux";

const LoginPage = () => {
    const [loginError, setLoginError] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { login } = useContext(AuthContext);

    const formHandler = (values) => {
        const localData = localStorage.getItem("users");

        if (!localData) {
            navigate("/register");
        }

        const users = JSON.parse(localData);
        const user = users.find((u) => u.email === values.email);

        setLoginError(null);
        if (user) {
            if (user.password === values.password) {
                localStorage.setItem("user", JSON.stringify(user));
                dispatch({
                    type: "USER_LOGIN",
                    payload: user
                });
                // login();
                navigate("/");
            } else {
                setLoginError("Не вірно вказано пароль");
            }
        } else {
            setLoginError(`Не знайдено користувача з поштою ${values.email}`);
        }
    };

    // init values
    const initValues = {
        email: "",
        password: "",
    };

    // validation yup scheme
    const yupValidationSchema = Yup.object({
        email: Yup.string()
            .required("Пошта обов'язкова")
            .email("Невірний формат пошти"),
        password: Yup.string()
            .required("Пароль обов'зковий")
            .min(6, "Пароль повинен містити не менше 6 символів"),
    });

    // formik
    const formik = useFormik({
        initialValues: initValues,
        onSubmit: formHandler,
        validationSchema: yupValidationSchema,
    });

    return (
        <Box
            component="form"
            onSubmit={formik.handleSubmit}
            className="form-container"
        >
            <Box>
                <h1>Login page</h1>
            </Box>
            <Box className="form-control">
                <TextField
                    type="email"
                    id="email"
                    name="email"
                    label="Email"
                    variant="filled"
                    fullWidth
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                    <FormError text={formik.errors.email} />
                ) : null}
            </Box>
            <Box className="form-control">
                <TextField
                    type="password"
                    id="password"
                    name="password"
                    label="Password"
                    variant="filled"
                    fullWidth
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                    <FormError text={formik.errors.password} />
                ) : null}
            </Box>
            <Box className="form-control">
                <Button type="submit" variant="contained" fullWidth>
                    Login
                </Button>
            </Box>
            <Box>
                <Typography>
                    Ще не зареєстровані?{" "}
                    <Link to="/register">Зареєструватися</Link>
                </Typography>
            </Box>
            <Box>
                <FormError text={loginError} />
            </Box>
        </Box>
    );
};

export default LoginPage;
