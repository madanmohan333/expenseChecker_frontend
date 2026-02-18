import axios from "axios";

const API = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "https://expensechecker-backend.onrender.com"
});

export const createExpense = (data) => API.post("/expenses", data);
export const getExpenses = (params) => API.get("/expenses", { params });
export const deleteExpense = (id) => API.delete(`/expenses/${id}`);