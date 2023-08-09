import { useState } from "react";
import Cat from "../../assets/cat.mp4";
import { Button, Modal } from "react-bootstrap";

function Secret() {
  const [password, setPassword] = useState("");
  const [passed, setPassed] = useState(false);

  const verifyPassword = () => {
    if (password === "chocolate") {
      setPassed(true);
    } else {
      alert("Senha incorreta!");
      setPassword("");
    }
  };

  return (
    <div className="d-flex flex-column w-100 align-items-center">
      {passed && (
        <video
          style={{ width: "100%", height: "auto", maxWidth: 500 }}
          controls
          autoPlay
        >
          <source src={Cat} type="video/mp4" />
        </video>
      )}
      <Modal show={!passed} centered>
        <div className="d-flex flex-column align-items-center p-3">
          <Modal.Title>Digite a senha:</Modal.Title>

          <Modal.Body>
            <div className="d-flex flex-column align-items-center">
              <input
                className="mb-3"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && verifyPassword()}
              />

              <Button onClick={verifyPassword}>Acessar</Button>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
}

export default Secret;
