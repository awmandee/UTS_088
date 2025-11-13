import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function FooterComponent() {
    return (
        <footer className="bg-light text-center text-lg-start mt-auto">
            <div className="container p-4">
                <div className="text-center">
                    <h6 className="text-uppercase fw-blod mb-4">
                        Toko Buku Manda
                    </h6>
                </div>
                <div className="d-flex justify-content-center">
                    <a href="/" className="me-4 text-reset">
                        Beranda
                    </a>
                    <a href="/list-kuis" className="me-4 text-reset">
                        Tambah Buku
                    </a>
                </div>
            </div>
        </footer>
    );
}
export default FooterComponent;
