import Errorimg from './error.jpg'
import { Container, Img, H2, Titulo } from './styles'

const Error = () => {
    return <>
    
    <Container>
        <div>
            <Titulo>Ooops...</Titulo>
            <H2>Page not found</H2>
        </div>
        <div>
            <Img src ={Errorimg} alt="" />
        </div>
    </Container>
    
    
    </>
}

export default Error