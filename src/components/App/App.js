import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Routes, Navigate, Route} from 'react-router-dom';
import Categories from "../Categories/categories"
import EshopService from "../../repository/EmtLabRepository";
import Header from "../Header/header"
import Books from "../Books/BookList/books"
import BookAdd from "../Books/BookAdd/bookAdd";
import BookEdit from "../Books/BookEdit/bookEdit";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            books: [],
            selectedBook: {}
        }
    }

    render() {
        return (
            <Router>
                <Header/>
                <main>
                    <div className="container">
                        <Routes>
                            <Route path="/categories"
                                   element={<Categories categories={this.state.categories}/>}/>
                            <Route path="/books/add" element={<BookAdd categories={this.state.categories}
                                                                             manufacturers={this.state.manufacturers}
                                                                             onBookAdd={this.addBook}/>}/>
                            <Route path="/books/edit/:id" element={<BookEdit categories={this.state.categories}
                                                                                   onEditBook={this.editBook}
                                                                                   book={this.state.selectedBook}/>}/>
                            <Route path="/books"
                                   element={<Books books={this.state.books}
                                                   onDelete={this.deleteBook}
                                                   onEdit={this.getBook}
                                                   onMark={this.markAsTaken}/>}/>
                            <Route path="/*" element={<Navigate to="/books"/>}/>
                        </Routes>
                    </div>
                </main>
            </Router>
        );
    }

    loadCategories = () => {
        EshopService.fetchCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                })
            });
    }
    loadBooks = () => {
        EshopService.fetchBooks()
            .then((data) => {
                this.setState({
                    books: data.data
                })
            });
    }
    deleteBook = (id) => {
        EshopService.deleteBook(id)
            .then(() => {
                this.loadBooks();
            });
    }
    markAsTaken = (id) => {
        EshopService.markAsTaken(id)
            .then(() => {
                this.loadBooks();
            });
    }
    addBook = (name,category, availableCopies) => {
        EshopService.addBook(name,category,availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }
    editBook = (id, name, category,availableCopies ) => {
        EshopService.editBook(id,name,category,availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }
    getBook = (id) => {
        EshopService.getBook(id)
            .then((data) => {
                this.setState({
                    selectedBook: data.data
                })
            })
    }

    componentDidMount() {
        this.loadCategories();
        this.loadBooks();
    }
}

export default App;
