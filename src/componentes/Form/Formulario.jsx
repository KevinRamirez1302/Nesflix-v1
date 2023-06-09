import {
  TextField,
  InputLabel,
  Button,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Titulo, Container } from './styles'

const Formulario = (props) => {
  const [nombre, SetNombre] = useState("");
  const [Descrip, SetDescrip] = useState("");
  const [url, Seturl] = useState("");
  const [categoria, Setcategoria] = useState("");
  const [img,setImg] = useState('')

  const EnviarForm = (e) => {
    e.preventDefault();

    let Datos = {
      titulo: nombre.toLowerCase(),
      Descrip: Descrip,
      url: url,
      Img : img,
      categoria: categoria.toLowerCase(),
      id: uuidv4(),
      fav:false
    };
    SetNombre("");
    Seturl("");
    SetDescrip("");
    Setcategoria("");
    setImg('')

    props.recibirDatos(Datos);
  };

 

  return (
    <Container>
      <Titulo>Agrega tu video favorito</Titulo>
      <form onSubmit={EnviarForm} action="">
      
      <TextField
        value={nombre}
        onChange={(e) => SetNombre(e.target.value)}
        fullWidth
        margin="normal"
        label="NOMBRE"
        variant="outlined"
        required
      />
      <TextField
        value={Descrip}
        onChange={(e) => SetDescrip(e.target.value)}
        fullWidth
        margin="normal"
        label="DESCRIPCION"
        variant="outlined"
      />
      <TextField
        value={img}
        onChange={(e) => setImg(e.target.value)}
        fullWidth
        margin="normal"
        label=" Url imagen"
        variant="outlined"
        required
      />
      <TextField
        value={url}
        onChange={(e) => Seturl(e.target.value)}
        fullWidth
        margin="normal"
        label="Video Url"
        variant="outlined"
        required
      />
      <FormControl margin="normal" fullWidth>
        <InputLabel>Categoria</InputLabel>
        <Select
          value={categoria}
          onChange={(e) => Setcategoria(e.target.value)}
          label="Categoria"
        >
          <MenuItem value={"Front End"}>FrontEnd</MenuItem>
          <MenuItem value={"Back End"}>BackEnd</MenuItem>
          <MenuItem value={"Fetch"}>Fetch</MenuItem>
          <MenuItem value={"Javascript"}>Javascript</MenuItem>
          <MenuItem value={"Tips"}>Tips</MenuItem>
          <MenuItem value={"Videojuegos"}>VideoJuegos</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" margin="normal" variant="contained">
        Subir Video
      </Button>
    </form>
    </Container>
    
  );
};

export default Formulario;
