export default function Rodape(props){
    return(
        <footer style={{
            marginTop: "50px"
        }}>
            <div style={{
                    border: "1px solid black",
                    borderRadius: "5px",
                    padding: "5px",
                    margin: "3px",
                    textAlign: "center",
                }}
            >
                <p>{props.conteudo}</p>
            </div>
        </footer>
    )
}