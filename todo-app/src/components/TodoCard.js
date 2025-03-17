import { Card,CardBody,CardTitle,Button } from "reactstrap";

function TodoCard({ task, onDelete }) {
    return (
        <Card className="mb-4">
            <CardBody>
                <CardTitle tag="h5">{task}</CardTitle>
                <Button color="danger" onClick={onDelete}>Delete</Button>
            </CardBody>
        </Card>
    );
}

export default TodoCard;