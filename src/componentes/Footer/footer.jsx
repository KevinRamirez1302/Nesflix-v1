import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { SectionFoo, Div,Titulo,Parrafo,DivBrand } from './styles'

const Footer = () => {
     return <>
        <SectionFoo>
            <Div>
            <Titulo>Footer</Titulo>
            <Parrafo>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea earum, ipsa sunt minus ducimus non. Soluta nobis molestias excepturi dignissimos in error porro perspiciatis molestiae similique eveniet delectus, quidem modi.</Parrafo>
            </Div>
            <DivBrand>
            <a href="" target='_blank'><BsLinkedin color='blue' size={50} /></a>
            <a href='' target='_blank'><BsGithub color='black' size={50} /></a>
            </DivBrand>
            <p>Desarrollado por kevin @Copyright 2023</p>
        </SectionFoo>
     
     </>
}

export default Footer