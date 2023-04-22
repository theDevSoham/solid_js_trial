import { Container, Pagination } from "solid-bootstrap";
import {
  isLoading,
  repos,
  username,
  currentPage,
  setCurrentPage,
} from "../App";
import { For, Show } from "solid-js";
import RepoCard from "./RepoCard";

function Home() {
  return (
    <Container class="py-5 my-5">
      <h1>Github repos for @{username()}</h1>

      <br />
      <Pagination size="lg">
        <For each={repos()}>
          {(repo, i) => (
            <Pagination.Item 
              active={i() === currentPage()}
              onClick={() => setCurrentPage(i())}
            >
              {i() + 1}
            </Pagination.Item>
          )}
        </For>
      </Pagination>
      <br />

      <Container>
        <Show when={!isLoading()} fallback={<h3>Loading</h3>}>
          <Show when={repos()[currentPage()].length > 0} fallback={<h3>No repos found</h3>}>
            <For each={repos()[currentPage()]}>
              {(repo, i) => <RepoCard repo={repo} key={i()} />}
            </For>
          </Show>
        </Show>
      </Container>
    </Container>
  );
}
export default Home;
