import { Button, Card, Container } from "solid-bootstrap";
import { favRepos, setFavRepos } from "../App";

function RepoCard({repo}) {

  const saveRepo = () => {
    if(favRepos().some(item => item.id === repo.id)) {
      setFavRepos(favRepos().filter((item) => item.id !== repo.id));
    }else{
      const newFavRepos = [...favRepos(), repo];
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
          {favRepos().some(item => item.id === repo.id) ? 
            <Button variant="danger" onClick={saveRepo}>Unsave</Button>
            :<Button variant="success" onClick={saveRepo}>Save</Button>
          }
        </Card.Body>
      </Card>
    </Container>
  );
}
export default RepoCard;
