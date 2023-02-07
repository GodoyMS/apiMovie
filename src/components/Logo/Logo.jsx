import s from "./style.module.css";

import { LogoImg ,LogoContainer,Title  } from "./styledLogo";

// STATELESS / SIN ESTADO / SIN COMPORTAMIENTO PROPIO

const Logo = ({ title, image }) => (
  <div>
    <div className={s.container}>
      <img className={s.img} src={image} alt="logo" />
      <span className={s.title}>{title}</span>
    </div>
  </div>
);

/*
const Logo = ({ title, image }) => (
  <div>
      <LogoContainer>
        <LogoImg src={image}/>
        <Title >{title}</Title>
      </LogoContainer>
    
  </div>
);
*/
export default Logo;
