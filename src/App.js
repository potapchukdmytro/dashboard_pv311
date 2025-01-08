import "./App.css";
import MainPage from "./pages/mainPage/MainPage";
import Footer from "./components/footer";
import Navbar from "./components/navbar/Navbar";

const App = () => {
    return (
        <>
            <Navbar />
            <MainPage />
            <Footer />
        </>
    );
};

export default App;
