import { Button } from 'react-bootstrap'
export default function TelaLogin() {
    return (
        <div style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                borderStyle: 'solid',
                borderWidth: '0.25rem',
                width: '50%',
                height: '50%',
                padding: '5%',
                borderRadius: '2.5rem',
                borderColor: '#949884',
                justifyContent: 'space-between'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',

                }}>
                    <span>Login</span>
                    <input type="text" placeholder="Informe seu login"></input>
                </div>
                <div style={{
                    
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <span>Senha</span>
                    <input type="password" placeholder="Informe sua senha"></input>
                </div>
                <Button style={{
                    width: '30%',
                    marginTop: '1%'
                }} type='submit' variant='success'>Entrar</Button>
            </div>
        </div>
    )
}