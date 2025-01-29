import { TextField, Box, Button, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./../registerPage/style.css";
import { FormError } from "../../components/errors/Errors";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAction from "../../hooks/useAction";

const LoginPage = () => {
    const [loginError, setLoginError] = useState(null);
    const navigate = useNavigate();
    const {login} = useAction();

    const formHandler = (values) => {
        setLoginError(null);
        const res = login(values);
        if(res.type === "ERROR") {
            setLoginError(res.payload);
        } else {
            navigate("/");
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
