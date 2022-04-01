import React from "react";
import './Books.scss'
class Books extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <div>
                        {this.props.allBooks.items && this.props.allBooks.items.map((elm, index) => {
                            return(
                                <div style>
                                    <div>
                                        <img src={elm.volumeInfo.imageLinks?.smallThumbnail } alt="Card image cap"/>
                                        <p>{elm.volumeInfo.title.slice(0, 25) + "..."}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
export default Books;