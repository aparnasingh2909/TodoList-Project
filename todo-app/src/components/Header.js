import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";

function Header() {
    return (
        <Card className="mb-5 text-center">
            <CardBody>
                <CardTitle className="display-5">TODO APP</CardTitle>
                <CardSubtitle className="display-6">Add your tasks for the day here!!</CardSubtitle>
            </CardBody>
        </Card>
    );
}

export default Header;