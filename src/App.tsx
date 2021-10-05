import { QRCodeGenerator } from "./components/QRCodeGenerator/QRCodeGenerator";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="App__header">QR code generator</h1>
      <QRCodeGenerator />
      <small className="App__poweredby">
        Powered by <a href="https://goqr.me/">goQR.me</a>
      </small>
    </div>
  );
}
