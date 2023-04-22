import { createEffect, createSignal, lazy } from "solid-js";
import { Routes, Route } from "@solidjs/router";
const Home = lazy(() => import("./components/Home"));
const SavedRepos = lazy(() => import("./components/SavedRepos"));
const Navigation = lazy(() => import("./components/Navigation"));

//"https://api.github.com/users/username/repos";

const [username, setUserName] = createSignal("theDevSoham");
const [repos, setRepos] = createSignal([]);
const [isLoading, setIsLoading] = createSignal(false);
const [favRepos, setFavRepos] = createSignal([]);
const [currentPage, setCurrentPage] = createSignal(0);

function App() {
  function paginate(array, items_per_page) {
    // Calculate the total number of pages
    const total_pages = Math.ceil(array.length / items_per_page);

    // Create an empty array to store the paginated results
    const paginated_array = [];

    // Iterate through each page
    for (let page = 1; page <= total_pages; page++) {
      // Calculate the starting index and ending index for the current page
      const start_index = (page - 1) * items_per_page;
      const end_index = start_index + items_per_page;

      // Slice the array to get the items for the current page
      const page_items = array.slice(start_index, end_index);

      // Add the page items to the paginated array
      paginated_array.push(page_items);
    }

    // Return the paginated array
    return paginated_array;
  }

  createEffect(() => {
    setIsLoading(true);
    if (username() === "") {
      setUserName("theDevSoham");
      fetch(`https://api.github.com/users/theDevSoham/repos?sort=created`)
        .then((res) => res.json())
        .then((data) => {
          setRepos(paginate(data, 10));
          setIsLoading(false);
        });
    } else {
      fetch(`https://api.github.com/users/${username()}/repos?sort=created`)
        .then((res) => res.json())
        .then((data) => {
          setRepos(paginate(data, 10));
          setIsLoading(false);
        });
    }
  });

  createEffect(() => {
    console.log(repos());
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

export {
  repos,
  username,
  isLoading,
  favRepos,
  setFavRepos,
  currentPage,
  setCurrentPage,
};
export default App;
