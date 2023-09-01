import Card from 'react-bootstrap/Card';
export default function Cabecalho(props) {
    return (
        <Card style={{
            textAlign: "center",
            marginBottom: "2%"
        }}>
            <Card.Body>{props.conteudo}</Card.Body>
        </Card>
    )
}