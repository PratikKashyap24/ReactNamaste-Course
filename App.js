import { React } from "react";
import ReactDOM from "react-dom/client";
const heading1 = createElement(
  "h1",
  {
    id: "title",
    key: "h1",
  },
  "Heading 1"
);
const heading2 = createElement(
  "h2",
  {
    id: "title",
    key: "h2",
  },
  "Heading 2"
);
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
