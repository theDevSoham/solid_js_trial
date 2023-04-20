import { lazy } from "solid-js";
import { Routes, Route } from "@solidjs/router";
const Home = lazy(() => import("./components/Home"));
const SavedRepos = lazy(() => import("./components/SavedRepos"));
const Navigation = lazy(() => import("./components/Navigation"));

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favrepos" element={<SavedRepos />} />
      </Routes>
    </div>
  );
}

export default App;
