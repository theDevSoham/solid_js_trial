import { createEffect, createSignal, lazy } from "solid-js";
import { Routes, Route } from "@solidjs/router";
const Home = lazy(() => import("./components/Home"));
const SavedRepos = lazy(() => import("./components/SavedRepos"));
const Navigation = lazy(() => import("./components/Navigation"));

//"https://api.github.com/users/username/repos";

const [username, setUserName] = createSignal('theDevSoham');
const [repos, setRepos] = createSignal([]);
const [isLoading, setIsLoading] = createSignal(false);
const [favRepos, setFavRepos] = createSignal([]);

function App() {

  createEffect(() => {
    setIsLoading(true);
    if(username() === '') {
      setUserName('theDevSoham');
      fetch(`https://api.github.com/users/theDevSoham/repos?sort=created`)
      .then((res) => res.json()).then((data) => {
        setRepos(data);
        setIsLoading(false);
      });
    }else{
      fetch(`https://api.github.com/users/${username()}/repos?sort=created`)
      .then((res) => res.json()).then((data) => {
        setRepos(data);
        setIsLoading(false);
      });
    }
  });

  return (
    <div>
      <Navigation onPressSearch={(uname) => setUserName(uname)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favrepos" element={<SavedRepos />} />
      </Routes>
    </div>
  );
}

export { repos, username, isLoading, favRepos, setFavRepos }
export default App;
