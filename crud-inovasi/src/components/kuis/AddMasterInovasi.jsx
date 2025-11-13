import React, { useState } from "react";
import { addData, masterData } from "../../services/ProdukService";
import { Link } from "react-router-dom";

function AddMasterInovasi() {
    const [namaJudul, setJudul] = useState("");
    const [deskripsiBuku, setDeskripsi] = useState("");
    const [kategoriBuku, setKategori] = useState("");
    const [tanggalSubmit, setTanggalSubmit] = useState("");
    const [pengusulBuku, setPengusul] = useState("");
    const [unitBuku, setUnit] = useState("");
    const [manfaatBuku, setManfaat] = useState("");
    const [hargaBuku, setHarga] = useState("");
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccessMessage(null);

        try {
            //React menampung input dari form:
            const newProduct = {
                nama_judul: namaJudul,
                deskripsi_buku: deskripsiBuku,
                kategori_buku: kategoriBuku,
                tanggal_submit: Date(tanggalSubmit),
                pengusul_buku: pengusulBuku,
                unit_buku: unitBuku,
                manfaat_buku: manfaatBuku,
                harga_buku: Number(hargaBuku),
            };

            // Lalu React kirim ke API:
            await masterData(newProduct);
            setSuccessMessage("Produk berhasil ditambahkan!");

            // reset form
            setJudul("");
            setDeskripsi("");
            setKategori("");
            setTanggalSubmit("");
            setPengusul("");
            setUnit("");
            setManfaat("");
            setHarga("");
        } catch (error) {
            console.error("Error adding master:", error);
            setError("Gagal menambahkan Buku. Silakan coba lagi.");
        }
    };

    return (
        <div className="container mt-4">
            <h2>Tambah Buku</h2>

            {error && <div className="alert alert-danger">{error}</div>}
            {successMessage && (
                <div className="alert alert-success">{successMessage}</div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="namaJudul" className="form-label">
                        Judul Buku
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="namaJudul"
                        value={namaJudul}
                        onChange={(e) => setJudul(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="deskripsiBuku" className="form-label">
                        Deskripsi Buku
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="deskripsiBuku"
                        value={deskripsiBuku}
                        onChange={(e) => setDeskripsi(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="kategoriBuku" className="form-label">
                        Kategori Buku
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="kategoriBuku"
                        value={kategoriBuku}
                        onChange={(e) => setKategori(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="tanggalSubmit" className="form-label">
                        Tanggal Submit
                    </label>
                    <input
                        type="date"
                        className="form-control"
                        id="tanggalSubmit"
                        value={tanggalSubmit}
                        onChange={(e) => setTanggalSubmit(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="pengusulBuku" className="form-label">
                        Pengusul
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="pengusulBuku"
                        value={pengusulBuku}
                        onChange={(e) => setPengusul(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="unitBuku" className="form-label">
                        Unit
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="unitBuku"
                        value={unitBuku}
                        onChange={(e) => setUnit(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="manfaatBuku" className="form-label">
                        Manfaat
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="manfaatBuku"
                        value={manfaatBuku}
                        onChange={(e) => setManfaat(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="hargaBuku" className="form-label">
                        Harga Buku
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="hargaBuku"
                        value={hargaBuku}
                        onChange={(e) => setHarga(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Tambah Buku
                </button>

                <Link to="/list-kuis" className="btn btn-secondary ms-2">
                    Kembali ke List Buku
                </Link>
            </form>
        </div>
    );
}

export default AddMasterInovasi;
