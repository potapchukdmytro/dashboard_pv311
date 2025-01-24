import {useContext, useEffect} from "react";
import MainPage from "./pages/mainPage/MainPage";
import "./App.css";
import RegisterPage from "./pages/registerPage/RegisterPage";
import {Route, Routes} from "react-router-dom";
import AboutPage from "./pages/about/AboutPage";
import NotFoundPage from "./pages/notFound/NotFoundPage";
import DefaultLayout from "./components/layouts/DefaultLayout";
import UsersListPage from "./pages/admin/users/UsersListPage";
import EditUserPage from "./pages/admin/users/editUserPage/EditUserPage";
import LoginPage from "./pages/loginPage/LoginPage";
import {AuthContext} from "./components/providers/AuthProvider";
import ProfilePage from "./pages/profilePage/ProfilePage";
import AdminPanelLayout from "./components/layouts/AdminPanelLayout";
import RolesListPage from "./pages/admin/roles/RolesListPage";

const App = () => {
    const {auth, login} = useContext(AuthContext);

    useEffect(() => {
        login();
    }, []);

    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route index element={<MainPage/>}/>
                {!auth ? (
                        <>
                            <Route path="register" element={<RegisterPage/>}/>
                            <Route path="login" element={<LoginPage/>}/>
                        </>
                    ) :
                    <Route path="profile" element={<ProfilePage/>}/>}
                <Route path="about" element={<AboutPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Route>
            {
                auth && auth.role === "admin" && (
                    <Route path="admin" element={<AdminPanelLayout/>}>
                        <Route path="users">
                            <Route index element={<UsersListPage/>}/>
                            <Route
                                path="user"
                                element={<EditUserPage isEdit={false}/>}
                            />
                            <Route
                                path="user/:id"
                                element={<EditUserPage isEdit={true}/>}
                            />
                        </Route>
                        <Route path="roles" element={<RolesListPage/>}/>
                    </Route>
                )
            }
        </Routes>
    )
};

export default App;