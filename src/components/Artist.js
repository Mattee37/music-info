import React from "react";
import PropTypes from "prop-types";

const Artist = ({ info }) => {
  //valida la existencia del objecto y de ser asi lo renderiza
  if (Object.keys(info).length === 0) return null;

  //desestructuramos el objecto
  const { strArtistThumb, strGenre, strBiographyES } = info;

  return (
    <div className="card border-light">
      <div className="card-header bg-primary text-light font-weight-bold">
        Informacion del artista
      </div>
      <div className="card-body">
        <img src={strArtistThumb} alt="Logo" />
        <p className="card-text">Genero: {strGenre}</p>
        <h2 className="card-text">Biografia:</h2>
        <p className="card-text">{strBiographyES}</p>
        <p className="card-text electron">
          <a
            href={`https://${info.strFacebook}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href={`https://${info.strTwitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href={`https://${info.strWebsite}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fas fa-globe"></i>
          </a>
          <a
            href={`${info.strLastFMChart}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-lastfm"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

Artist.propTypes = {
  info: PropTypes.object.isRequired
};

export default Artist;
