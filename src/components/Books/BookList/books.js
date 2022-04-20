import React from "react";
import {Link} from "react-router-dom";
import ProductTerm from "../BookTerm/ProductTerm";
import ReactPaginate from 'react-paginate';

class Books extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            size: 5
        }
    }

    render() {

        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.books.length / this.state.size);
        const books = this.getBooksPage(offset, nextPageOffset);

        return (
            <div className={"container mm-4 mt-5"}>
                <div className={"row"}>
                    <div className={"table-responsive"}>
                        <table className={"table table-striped"}>
                            <thead>
                            <tr>
                                <th scope={"col"}>Book Name</th>
                                <th scope={"col"}>Book Category</th>
                                <th scope={"col"}>Available Copies</th>
                            </tr>
                            </thead>
                            <tbody>
                            {books}
                            </tbody>
                        </table>
                    </div>
                    <div className="col mb-3">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 d-grid gap-2">
                                <Link className="btn btn-dark" to={"/books/add"}>Add new product</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <ReactPaginate previousLabel={"< previous"}
                               nextLabel={"next >"}
                               previousLinkClassName={"page-link"}
                               nextLinkClassName={"page-link"}
                               breakLabel={"..."}
                               breakClassName={"page-item"}
                               breakLinkClassName={"page-item"}
                               pageClassName={"page-item"}
                               pageLinkClassName={"page-link"}
                               pageCount={pageCount}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={3}
                               onPageChange={this.handlePageClick}
                               containerClassName={"pagination m-4 justify-content-center"}
                               activeClassName={"active"}/>
            </div>
        );
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        this.setState({
            page: selected
        })
    }

    getBooksPage = (offset, nextPageOffset) => {
        return this.props.books.map((term) => {
            return (
                <ProductTerm term={term} onDelete={this.props.onDelete}
                             onEdit={this.props.onEdit} onMark={this.props.onMark}/>
            );
        }).filter((product, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }
}
export default Books;