import React from "react";
import Rating from "./Rating";
import Price from "./Price";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const [img, setImg] = React.useState();

    const mountedRef = React.useRef(true);

    React.useEffect(() => {
        const image = new Image();
        image.src = book.url;
        image.onload = () => {
            if (mountedRef.current) {
                setImg(image);
            }
        };
        return () => {
            mountedRef.current = false;
        };
    });

    return (
        <div className="book">
            {/* {
            img ? (<>  */}
            <Link to={`/books/${book.id}`} className="book__link">
                <figure className="book__img--wrapper">
                    <img src={book.url} alt="" className="book__img" />
                </figure>
            </Link>
            <div className="book__title">
                <Link to={`/books/${book.id}`} className="book__title--link">
                    {book.title}
                </Link>
            </div>
            <Rating rating={book.rating} />
            <Price
                originalPrice={book.originalPrice}
                salePrice={book.salePrice}
            />
            {/* </>) : 
            (<>
            <div className="book__img--skeleton"></div>
            <div className="skeleton book__title--skeleton"></div>
            <div className="skeleton book__rating--skeleton"></div>
            <div className="skeleton book__price--skeleton"></div>
            </>)
            } */}
        </div>
    );
};

export default Book;
