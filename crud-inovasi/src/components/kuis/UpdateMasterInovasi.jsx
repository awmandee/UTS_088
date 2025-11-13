import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { masterData, updateMaster } from "../../services/ProdukService";

function UpdateMasterInovasi() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [kuis, setKuis] = useState({
        nama_judul: "",
        deskripsi_buku: "",
        kategori_buku: "",
        tanggal_submit: "",
        pengusul_buku: "",
        unit_buku: "",
        manfaat_buku: "",
        harga_buku: "",
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await masterData();
                const kuis = response.kuis.find((p) => p.id == id);
                if (kuis) setKuis(kuis);
                else setError("Produk tidak ditemukan.");
            } catch (err) {
                console.error("Error:", err);
                setError("Gagal memuat data produk.");
            }
        };
        fetchData();
    }, [id]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setKuis({ ...kuis, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        try {
            await updateProduk(id, kuis);
            setSuccess("Buku berhasil diperbarui!");
            setTimeout(() => navigate("/list-kuis"), 1500);
        } catch (err) {
            console.error("Error updating Book:", err);
            setError("Gagal memperbarui Buku.");
        }
    };

    return (
        <div className="container mt-5">
            <div className="card shadow-sm border-0">
                <div className="card-header bg-warning text-dark">
                    <h4 className="mb-0">✏️ Edit Buku</h4>
                </div>
                <div className="card-body bg-light">
                    {error && <div className="alert alert-danger">{error}</div>}
                    {success && (
                        <div className="alert alert-success">{success}</div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="nama_judul" className="form-label">
                                Nama Buku
                            </label>
                            <input
                                type="text"
                                id="nama_judul"
                                className="form-control"
                                value={kuis.nama_judul}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label
                                htmlFor="deskripsi_buku"
                                className="form-label"
                            >
                                Deskripsi
                            </label>
                            <input
                                type="text"
                                id="deskripsi_buku"
                                className="form-control"
                                value={kuis.deskripsi_buku}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label
                                htmlFor="tanggal_submit"
                                className="form-label"
                            >
                                Tanggal Submit
                            </label>
                            <input
                                type="date"
                                id="tanggal_submit"
                                className="form-control"
                                value={kuis.tanggal_submit}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label
                                htmlFor="pengusul_buku"
                                className="form-label"
                            >
                                Pengusul
                            </label>
                            <input
                                type="text"
                                id="pengusul_buku"
                                className="form-control"
                                value={kuis.pengusul_buku}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="unit_buku" className="form-label">
                                Unit Buku
                            </label>
                            <input
                                type="text"
                                id="unit_buku"
                                className="form-control"
                                value={kuis.unit_buku}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label
                                htmlFor="manfaat_buku"
                                className="form-label"
                            >
                                Manfaat Buku
                            </label>
                            <input
                                type="textr"
                                id="manfaat_buku"
                                className="form-control"
                                value={kuis.manfaat_buku}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="harga_buku" className="form-label">
                                Harga Jual
                            </label>
                            <input
                                type="number"
                                id="harga_buku"
                                className="form-control"
                                value={kuis.harga_buku}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-warning">
                            Simpan Perubahan
                        </button>
                        <Link
                            to="/list-kuis"
                            className="btn btn-secondary ms-2"
                        >
                            Kembali
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateMasterInovasi;
