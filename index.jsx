import { createRoot } from "react-dom/client";
import { MainView } from "./components/main-view/main-view"; // Import MainView component
import "./index.scss"; // Import global styles

// Create the root element and render the MainView component
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<MainView />);