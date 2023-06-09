import { Container } from "solid-bootstrap";
import { favRepos, isLoading, repos } from "../App";
import { For, Show, createEffect, createSignal } from "solid-js";
import RepoCard from "./RepoCard";

function SavedRepos() {

  const [saved, setSaved] = createSignal([]);

  // const flatten = (arr) => {
  //   return arr.reduce(
  //     (flat, toFlatten) =>
  //       flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten),
  //     []
  //   );
  // };

  createEffect(() => {
    setSaved(favRepos());
  });

  return (
    <Container class="py-5 my-5">
      <Show when={!isLoading()} fallback={<h3>Loading</h3>}>
        <Show when={saved().length > 0} fallback={<h3>No saved repos found</h3>}>
          <For each={saved()}>
            {(repo, i) => <RepoCard repo={repo} key={i()} />}
          </For>
        </Show>
      </Show>
    </Container>
  );
}
export default SavedRepos;
