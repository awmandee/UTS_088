import axios from "axios";

// sumber database api mas roni
const REST_API_BASE_URL = "https://api.roniprsty.com/kuis/";

// view list produk
export const masterData = () => axios.get(REST_API_BASE_URL + "read.php");

//add produk
export const addData = (newProduct) =>
    axios.post(REST_API_BASE_URL + "create.php", newProduct);

//update produk
export const updateMaster = (id, updatedMaster) =>
    axios.post(REST_API_BASE_URL + "update.php", {
        id,
        ...updatedMaster,
    });

//delete produk
// export const deleteProduk = (id) =>
//     axios.post(REST_API_BASE_URL + "delete.php", { id });

// delete sheila
export const deleteMaster = (id) => {
    return axios.get(`${REST_API_BASE_URL}delete.php?id=${id}`);
};
