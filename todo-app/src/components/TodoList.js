import { Card, CardBody, CardTitle, Button, Row,Col } from 'reactstrap';
import TodoCard from './TodoCard';

function TodoList({ tasks, deleteTask }) {
    return (
        <Row>
            {tasks.map((task, index) => (
                <Col sm="4" key={index}>
                    <TodoCard task={task} onDelete={() => deleteTask(index)} />
                </Col>
            ))}
        </Row>
    );
}

export default TodoList;