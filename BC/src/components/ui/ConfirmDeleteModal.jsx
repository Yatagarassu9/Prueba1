import { Button, Modal } from "react-bootstrap";

const ConfirmDeleteModal = ({ show, onCancel, onConfirm, bookTitle }) => {
    return (
        <Modal show={show} onHide={onCancel} centered>
            <Modal.Header closeButton>
                <Modal.Title>Eliminar libro</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                ¿Deseas realmente eliminar <strong>"{bookTitle}"</strong> de la lista?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onCancel}>
                    Cancelar
                </Button>
                <Button variant="danger" onClick={onConfirm}>
                    Sí, deseo eliminarlo
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmDeleteModal;
