import { Titulo, Div, Img, DivColor, Division, Delete } from "./styles";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion";

const VideoCard = (props) => {
  const { PrimaryColor } = props.datos;
  const { Like, id, fav, Eliminar } = props;

  return (
    <Div>
      <Delete>
        <IoMdCloseCircle style={{top:-100}} onClick={() => Eliminar(id)} color="red" size={20} />
      </Delete>
      <Img src={props.img} alt="" />
      <Division>
        <a style={{ textDecoration: "none" }} href={props.url} target="_blank">
          <Titulo>{props.titulo}</Titulo>
        </a>
        <p>{props.descripcion}</p>
      </Division>

      {fav ? (
        <motion.div
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
        >
          <AiFillHeart size={20} onClick={() => Like(id)} color="red" />
        </motion.div>
      ) : (
        <motion.div
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
        >
          <AiOutlineHeart size={20} onClick={() => Like(id)} />
        </motion.div>
      )}
    </Div>
  );
};

export default VideoCard;
