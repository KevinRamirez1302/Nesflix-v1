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

const Formulario = (props) => {
  const [nombre, SetNombre] = useState("");
  const [Descrip, SetDescrip] = useState("");
  const [url, Seturl] = useState("");
  const [categoria, Setcategoria] = useState("");

  const EnviarForm = (e) => {
    e.preventDefault();

    let Datos = {
      nombre: nombre,
      Descrip: Descrip,
      url: url,
      categoria: categoria,
      id: uuidv4()
    };
    SetNombre("");
    Seturl("");
    SetDescrip("");
    Setcategoria("");

    props.recibirDatos(Datos);
  };

  return (
    <form onSubmit={EnviarForm} action="">
      <TextField
        value={nombre}
        onChange={(e) => SetNombre(e.target.value)}
        fullWidth
        margin="normal"
        label="NOMBRE"
        variant="outlined"
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
        value={url}
        onChange={(e) => Seturl(e.target.value)}
        fullWidth
        margin="normal"
        label="URL"
        variant="outlined"
      />
      <FormControl margin="normal" fullWidth>
        <InputLabel>Categoria</InputLabel>
        <Select
          value={categoria}
          onChange={(e) => Setcategoria(e.target.value)}
          label="Categoria"
        >
          <MenuItem value={"accion"}>Accion</MenuItem>
          <MenuItem value={"Comedia"}>Comedia</MenuItem>
          <MenuItem value={"educativo"}>Educativo</MenuItem>
          <MenuItem value={"Videojuegos"}>VideoJuegos</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" margin="normal" variant="contained">
        Subir Video
      </Button>
    </form>
  );
};

export default Formulario;
