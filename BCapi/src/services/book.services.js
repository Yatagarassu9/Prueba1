import { Book } from "../models/book.js";


export const findBooks = async (req, res) => {
    try {
        const books = await Book.findAll();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener libros" });
    }
};


export const findBook = async (req, res) => {
    const { id } = req.params;

    try {
        const book = await Book.findByPk(id);

        if (!book) {
            return res.status(404).json({ message: "Libro no encontrado" });
        }

        res.json(book);
    } catch (error) {
        res.status(500).json({ message: "Error al buscar libro" });
    }
};


export const createBook = async (req, res) => {
    const {
        title,
        author,
        rating,
        pageCount,
        summary,
        imageUrl,
        available
    } = req.body;


    if (!title || !author) {
        return res.status(400).json({
            message: "Title y Author son obligatorios"
        });
    }

    try {
        const newBook = await Book.create({
            title,
            author,
            rating,
            pageCount,
            summary,
            imageUrl,
            available
        });

        res.json(newBook);
    } catch (error) {
        res.status(500).json({
            message: "Error al crear el libro"
        });
    }
};


export const updateBook = async (req, res) => {
    const { id } = req.params;

    try {
        const book = await Book.findByPk(id);

        if (!book) {
            return res.status(404).json({ message: "Libro no encontrado" });
        }

        await book.update(req.body);

        res.json(book);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar libro" });
    }
};


export const deleteBook = async (req, res) => {
    const { id } = req.params;

    try {
        const book = await Book.findByPk(id);

        if (!book) {
            return res.status(404).json({ message: "Libro no encontrado" });
        }

        await book.destroy();

        res.json({ message: "Libro eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar libro" });
    }
};