import { useRef, useState } from "react";
import { Button, Card, Col, Form, FormGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ email: false, password: false });

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!emailRef.current.value.length) {
            setErrors({ ...errors, email: true });
            emailRef.current.focus();
            return;
        }

        if (!password.length || password.length < 7) {
            setErrors({ ...errors, password: true });
            passwordRef.current.focus();
            return;
        }


        setIsLoggedIn(true);


        navigate("/library");
    };

    return (
        <Card className="mt-5 mx-3 p-3 px-5 shadow">
            <Card.Body>
                <Row className="mb-2">
                    <h5>¡Bienvenidos a Books Champion!</h5>
                </Row>

                <Form onSubmit={handleSubmit}>
                    <FormGroup className="mb-1">
                        <Form.Control
                            type="email"
                            placeholder="Ingresar email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setErrors({ ...errors, email: false });
                            }}
                            ref={emailRef}
                            value={email}
                            className={errors.email ? "border border-danger" : ""}
                        />
                        {errors.email && (
                            <p className="text-danger mt-1 mb-0">
                                Debes completar el email.
                            </p>
                        )}
                    </FormGroup>

                    <FormGroup className="mb-4 mt-3">
                        <Form.Control
                            type="password"
                            placeholder="Ingresar contraseña"
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setErrors({ ...errors, password: false });
                            }}
                            ref={passwordRef}
                            value={password}
                            className={errors.password ? "border border-danger" : ""}
                        />
                        {errors.password && (
                            <p className="text-danger mt-1 mb-0">
                                Mínimo 7 caracteres.
                            </p>
                        )}
                    </FormGroup>

                    <Row>
                        <Col />
                        <Col md={6} className="d-flex justify-content-end">
                            <Button variant="secondary" type="submit">
                                Iniciar sesión
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default Login;