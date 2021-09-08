import * as THREE from "three";
import pep from "../images/pep.png";
import sort from "../images/sort.png";
import blog from "../images/blog.png";
import tt from "../images/typetest.png";
import rep from "../images/rep.png";
import gg from "../images/gg.png";
import code from "../images/code.png";

const loader = new THREE.TextureLoader();
const textures = {
  pep: loader.load(pep),
  sort: loader.load(sort),
  blog: loader.load(blog),
  tt: loader.load(tt),
  rep: loader.load(rep),
  gg: loader.load(gg),
  code: loader.load(code),
};
export default textures;
