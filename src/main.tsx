import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app.tsx";
import { Provider } from "./components/provider.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { BlogDetail } from "./components/blog-detail.tsx";
import { Home } from "./pages/home.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path=":slug" element={<BlogDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
