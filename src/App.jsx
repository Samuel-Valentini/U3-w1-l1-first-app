import "./App.css";
import H4Component from "./components/H4Component";
import ImageComponent from "./components/ImageComponent";
import H5Component from "./components/H5Component";

function App() {
    return (
        <>
            <H4Component content="Questa è un'immagine casuale" />
            <H5Component content="ricarica la pagina per ottenere una nuova immagine" />
            <ImageComponent
                src="https://picsum.photos/400/300"
                alt="immagine casuale"
            />
        </>
    );
}

export default App;
