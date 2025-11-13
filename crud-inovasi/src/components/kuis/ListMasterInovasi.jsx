import React, { useEffect, useState } from "react";
import { masterData, deleteMaster } from "../../services/ProdukService";
import { Link, useNavigate } from "react-router-dom";

function ListMasterInovasi() {
    const [kuisData, setKuisData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Fungsi untuk ambil data buku
    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await masterData();
            setKuisData(response.data);
        } catch (error) {
            console.error("Error fetching book data:", error);
            setError("Gagal mengambil data buku.");
        } finally {
            setLoading(false);
        }
    };

    // Panggil fetchBuku saat komponen pertama kali di-load
    useEffect(() => {
        fetchData();
    }, []);

    // Hapus buku dan auto-refresh list
    const handleDelete = async (id) => {
        if (window.confirm("Yakin ingin menghapus buku ini?")) {
            try {
                console.log("Menghapus buku dengan ID:", id);
                const response = await deleteMaster(id);
                console.log("Respon dari server:", response.data);

                if (response.data && response.data.message) {
                    const pesan = response.data.message.toLowerCase();

                    if (pesan.includes("berhasil")) {
                        alert("Buku berhasil dihapus!");
                    } else if (pesan.includes("tidak ditemukan")) {
                        alert("Buku tidak ditemukan di server!");
                    } else {
                        alert("Respon dari server: " + response.data.message);
                    }
                } else {
                    alert("Tidak ada respon dari server.");
                }

                // Refresh data setelah delete
                fetchData();
            } catch (error) {
                console.error("Error deleting Book:", error);
                alert("Gagal menghapus buku. Periksa koneksi atau server API.");
            }
        }
    };

    if (loading) {
        return (
            <div className="text-center mt-5">
                <h4>Loading...</h4>
            </div>
        );
    }

    return (
        <div className="container-fluid mt-4 px-5">
            <h2 className="mb-4 text-center">List Buku</h2>

            <div className="d-flex justify-content-start mb-3">
                <Link to="/tambah-kuis" className="btn btn-primary">
                    Tambah Buku
                </Link>
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            <table className="table table-striped table-bordered align-middle text-center">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Nama Buku</th>
                        <th>Deskripsi Buku</th>
                        <th>Kategori Buku</th>
                        <th>Tanggal Submit</th>
                        <th>Harga</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {kuisData.length > 0 ? (
                        kuisData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td className="text-start">
                                    {item.nama_judul}
                                </td>
                                <td className="text-start">
                                    {item.deskripsi_buku}
                                </td>
                                <td>
                                    {parseFloat(item.harga_jual).toLocaleString(
                                        "id-ID"
                                    )}
                                </td>
                                <td className="text-start">
                                    {item.kategori_buku}
                                </td>
                                <td>{item.status}</td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-warning me-2"
                                        onClick={() =>
                                            navigate(`/update-kuis/${item.id}`)
                                        }
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => handleDelete(item.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8">Tidak ada Buku ditemukan.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default ListMasterInovasi;
