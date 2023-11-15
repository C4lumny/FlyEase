import PropTypes from "prop-types";
import GithubIcon from "../assets/git-icon.png";

export function TeamCard({ nombre, cargo, imagen, github }) {
  return (
    <div className="flex flex-col items-center justify-center w-[300px] h-[300px] bg-white rounded-xl shadow-xl">
      <img
        src={imagen}
        alt="team-member"
        className="w-[200px] h-[200px] rounded-full"
      />
      <div className="flex flex-col items-center justify-center w-[300px] h-[100px] bg-white rounded-xl shadow-xl">
        <div className="flex items-center justify-center gap-2">
          <h1 className="font-bold text-2xl">{nombre}</h1>
          <a href={github} target="_blank" rel="noreferrer noopener">
            <img src={GithubIcon} alt="git icon" className="w-[30px]" />
          </a>
        </div>
        <p className="font-medium text-xl">{cargo}</p>
      </div>
    </div>
  );
}

TeamCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  cargo: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};
