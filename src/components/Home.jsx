import { Container } from "solid-bootstrap";
import { isLoading, repos, username } from "../App";
import { For, Show } from "solid-js";
import RepoCard from "./RepoCard";

function Home() {

  return <Container class="py-5 my-5">
    <h1>Github repos for @{username()}</h1>

    <Container>
      <Show when={!isLoading()} fallback={<h3>Loading</h3>}>
        <Show when={repos().length > 0} fallback={<h3>No repos found</h3>}>
          <For each={repos()}>
            {(repo, i) => <RepoCard repo={repo} key={i()} />}
          </For>
        </Show>
      </Show>
    </Container>
  </Container>
}
export default Home;
