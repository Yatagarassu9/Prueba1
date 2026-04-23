import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import NewBook from '../newBook/NewBook';
import Books from '../books/Books';
import { use } from 'react';
import { useEffect } from 'react';



const Dashboard = ({ setIsLoggedIn }) => {

    const navigate = useNavigate();


    const [books, setBooks] = useState([]);



    useEffect(() => {
        fetch("http://localhost:3000/books")
            .then((response) => response.json())
            .then((data) => setBooks(data))
            .catch((error) => console.error("Error fetching books:", error));
    }, []);


    const handleLogout = () => {
        setIsLoggedIn(false);
        navigate("/login");
    };

    const handleBookAdded = (enteredBook) => {
    fetch("http://localhost:3000/books", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(enteredBook),
    })
        .then((res) => res.json())
        .then((data) => {
            
            setBooks((prevBooks) => [data, ...prevBooks]);
        })
        .catch((err) => console.log(err));
};

    const handleDeleteBook = (id) => {
        setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
    };

    return (
        <div>


            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button onClick={handleLogout}>
                    Cerrar sesión
                </button>
            </div>

            <h1>Book Champions!</h1>
            <h3>Libros!</h3>

            <NewBook onBookAdded={handleBookAdded} />
            <Books books={books} onDelete={handleDeleteBook} />

        </div>
    );
};

export default Dashboard;