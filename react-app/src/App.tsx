import Alert from "./components/Alert";

function App() {
  return (
    <div className="alert alert-primary alert-dismissible fade show" role="alert">
      <strong>Message</strong> <Alert />
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}

export default App;
