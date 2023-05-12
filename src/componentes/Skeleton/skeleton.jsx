import { Skeleton } from '@mui/material'
import styled from 'styled-components'
export { Skeleton } from '@mui/material'

const Container = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 2rem;
    `

    const Div = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center
        ;
    `

export const SketonVi= () => {

    return <Container>
        <Div>
        <Skeleton  sx={{ bgcolor: 'grey.900' }}  animation={'wave'} variant="rounded" width={200} height={120} />
        <Skeleton style={{margin:5}} animation={'wave'} variant="rectangular" width={190} height={15} />
        <Skeleton animation={'wave'} variant="rectangular" width={150} height={15} />
        </Div>
        <Div>
        <Skeleton  sx={{ bgcolor: 'grey.900' }}  animation={'wave'} variant="rounded" width={200} height={120} />
        <Skeleton style={{margin:5}} animation={'wave'} variant="rectangular" width={190} height={15} />
        <Skeleton animation={'wave'} variant="rectangular" width={150} height={15} />
        </Div>
        <Div>
        <Skeleton  sx={{ bgcolor: 'grey.900' }}  animation={'wave'} variant="rounded" width={200} height={120} />
        <Skeleton style={{margin:5}} animation={'wave'} variant="rectangular" width={190} height={15} />
        <Skeleton animation={'wave'} variant="rectangular" width={150} height={15} />
        </Div>
        <Div>
        <Skeleton  sx={{ bgcolor: 'grey.900' }}  animation={'wave'} variant="rounded" width={200} height={120} />
        <Skeleton style={{margin:5}} animation={'wave'} variant="rectangular" width={190} height={15} />
        <Skeleton animation={'wave'} variant="rectangular" width={150} height={15} />
        </Div>
        <Div>
        <Skeleton  sx={{ bgcolor: 'grey.900' }}  animation={'wave'} variant="rounded" width={200} height={120} />
        <Skeleton style={{margin:5}} animation={'wave'} variant="rectangular" width={190} height={15} />
        <Skeleton animation={'wave'} variant="rectangular" width={150} height={15} />
        </Div>
        <Div>
        <Skeleton  sx={{ bgcolor: 'grey.900' }}  animation={'wave'} variant="rounded" width={200} height={120} />
        <Skeleton style={{margin:5}} animation={'wave'} variant="rectangular" width={190} height={15} />
        <Skeleton animation={'wave'} variant="rectangular" width={150} height={15} />
        </Div>
        <Div>
        <Skeleton  sx={{ bgcolor: 'grey.900' }}  animation={'wave'} variant="rounded" width={200} height={120} />
        <Skeleton style={{margin:5}} animation={'wave'} variant="rectangular" width={190} height={15} />
        <Skeleton animation={'wave'} variant="rectangular" width={150} height={15} />
        </Div>
        <Div>
        <Skeleton  sx={{ bgcolor: 'grey.900' }}  animation={'wave'} variant="rounded" width={200} height={120} />
        <Skeleton style={{margin:5}} animation={'wave'} variant="rectangular" width={190} height={15} />
        <Skeleton animation={'wave'} variant="rectangular" width={150} height={15} />
        </Div>
        
       

       
    </Container> 
}