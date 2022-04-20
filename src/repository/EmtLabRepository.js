import axios from "../custom-axios/axios";

const EshopService = {
    fetchCategories: () => {
        return axios.get("/categories");
    },
    fetchBooks: () => {
        return axios.get("/books");
    },
    deleteBook: (id) => {
        return axios.delete(`/books/delete/${id}`);
    },
    markAsTaken: (id) => {
        return axios.post(`/books/markAsTaken/${id}`);
    },
    addBook: (name,category,availableCopies) => {
        return axios.post("/books/add", {
            "name": name,
            "category": category,
            "availableCopies" : availableCopies
        });
    },
    editBook: (id,name,category,availableCopies) => {
        return axios.put(`/books/edit/${id}`, {
            "name": name,
            "category": category,
            "availableCopies" : availableCopies
        });
    },
    getBook: (id) =>{
        return axios.get(`/books/${id}`)
    }
}
export default EshopService;