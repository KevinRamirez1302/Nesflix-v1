import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { SectionFoo, Div,Titulo,Parrafo,DivBrand } from './styles'

const Footer = () => {
     return <>
        <SectionFoo>
            <Div>
            <Titulo>Nesflix</Titulo>
            <Parrafo>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea earum, ipsa sunt minus ducimus non. Soluta nobis molestias excepturi dignissimos in error porro perspiciatis molestiae similique eveniet delectus, quidem modi.</Parrafo>
            </Div>
            <Div style={{lineHeight:2}}>
                <h3 style={{margin: 15}}>Contacto</h3>
                <p>Kevin.alexanderra1302@gmail.com</p>
                <p>+58 (414)5743920</p>

                <DivBrand>
            <a href=" https://www.linkedin.com/in/kevin-ram%C3%ADrez-860492270/" target='_blank'><BsLinkedin color='blue' size={50} /></a>
            <a href='' target='_blank'><BsGithub color='black' size={50} /></a>
            </DivBrand>
           
            </Div>
            
        </SectionFoo>
     
     </>
}

export default Footer