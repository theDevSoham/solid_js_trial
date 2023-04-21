import { Button, Card, Container } from "solid-bootstrap";
import { favRepos, setFavRepos } from "../App";

function RepoCard({repo}) {

  const saveRepo = () => {
    if(favRepos().includes(repo.id)) {
      setFavRepos(favRepos().filter((id) => id !== repo.id));
    }else{
      const newFavRepos = [...favRepos(), repo.id];
      setFavRepos(newFavRepos);
    };
  };

  return (
    <Container class="py-2">
      <Card>
        <Card.Header>✨stars: {repo?.stargazers_count}</Card.Header>
        <Card.Body>
          <Card.Title>
            <a href={repo?.html_url}>{typeof repo?.full_name === "string" ? repo.full_name : "{No name provided}"}</a>
          </Card.Title>
          <Card.Text>
            {typeof repo.description === "string" ? repo?.description : "No description provided"}
          </Card.Text>
          {favRepos().includes(repo.id) ? 
            <Button variant="danger" onClick={saveRepo}>Unsave</Button>
            :<Button variant="success" onClick={saveRepo}>Save</Button>
          }
        </Card.Body>
      </Card>
    </Container>
  );
}
export default RepoCard;
