import { Button, Card, Container } from "solid-bootstrap";

function RepoCard() {
  return (
    <Container class="py-2">
      <Card>
        <Card.Header>✨stars: </Card.Header>
        <Card.Body>
          <Card.Title>
            <a href="#">username/reponame</a>
          </Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            similique.
          </Card.Text>
          <Button variant="success">Save</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default RepoCard;
