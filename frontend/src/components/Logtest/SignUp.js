import React from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function SignUp() {
    return (
      <div>
        <Form>
          <Form.Group
            controlId="formBasicEmail"
            className="d-flex flex-wrap justify-content-center align-items-center align-content-center"
          >
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>

          <Form.Group
            controlId="formBasicPassword"
            className="d-flex flex-wrap justify-content-center align-items-center align-content-center"
          >
            <Form.Label>Mots de passe</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group
            controlId="formBasicCheckbox"
            className="d-flex flex-wrap justify-content-center align-items-center align-content-center"
          >
            <Form.Check type="checkbox" label="J'accepte les conditions générales" />
          </Form.Group>
          <Button
            className="d-grid gap-2 d-md-flex justify-content-md-end"
            variant="primary"
            type="submit"
          >
            S'enregistrer
          </Button>
        </Form>
      </div>
    );
}
