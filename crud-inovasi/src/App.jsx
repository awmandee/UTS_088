import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//memanggil HEaderComponents serta FooterComponent ke dalam app jsx
import HeaderComponent from "./components/templates/HeaderComponent";
import FooterComponent from "./components/templates/FooterComponent";
import AddMasterInovasi from "./components/kuis/AddMasterInovasi";
//memanggil dari kelas listProdukComponents
import ListmasterInovasi from "./components/kuis/ListMasterInovasi";
import UpdateMasterInovasi from "./components/kuis/UpdateMasterInovasi"; // ✅ import baru

function App() {
    return (
        <Router>
            <div className="d-flex flex-column min-vh-100">
                <HeaderComponent />
                <div className="flex-grow-1">
                    <Routes>
                        <Route
                            path="/tambah-kuis"
                            element={<AddMasterInovasi />}
                        />
                        <Route
                            path="/list-kuis"
                            element={<ListmasterInovasi />}
                        />
                        <Route
                            path="/edit-kuis/:id"
                            element={<UpdateMasterInovasi />}
                        />
                        {/* rute lainnya bisa ditambahkan disini */}
                    </Routes>
                </div>
                <FooterComponent />
            </div>
        </Router>
    );
}

export default App;
