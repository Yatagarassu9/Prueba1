import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h2>¡Oops! La página solicitada no fue encontrada</h2>

            <Button onClick={() => navigate("/login")}>
                Volver a Iniciar sesión
            </Button>
        </div>
    );
};

export default NotFound;