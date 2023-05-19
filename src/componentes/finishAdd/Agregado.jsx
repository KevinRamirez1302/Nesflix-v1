import styled from "styled-components"
import { AiFillCheckCircle} from 'react-icons/ai'

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Agregado = () => {
    return <>
        <Div>
            <AiFillCheckCircle size={100} color="green" />
        </Div>
    
    </>
}

export default Agregado