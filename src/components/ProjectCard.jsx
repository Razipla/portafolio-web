/**
 * @copyright 2025 allanalpizar
 * @license Apache-2.0
 */

import PropTypes from "prop-types";

const ProjectCard = ({ imgSrc, title, tags, projectLink, classes }) => {
  return (
    <div className={`relative p-5 rounded-2xl bg-[#f0f2f5] hover:bg-[#dcdfe4] active:bg-[#c8ccd2] border border-[#7f8fa6]/30 transition-colors shadow-md ${classes}`}>
      <figure className="img-box aspect-square rounded-lg mb-4 overflow-hidden">
        <img src={imgSrc} alt={title} loading="lazy" className="img-cover" />
      </figure>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-[#273c75] mb-3">{title}</h3>
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, index) => (
              <span key={index} className="inline-flex items-center justify-center px-3 py-1 text-sm font-medium text-[#273c75] bg-[#fbc531]/20 rounded-lg">
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="w-11 h-11 rounded-lg grid place-items-center bg-[#273c75] text-white shrink-0 transition hover:bg-[#1e2c5e] hover:scale-110">
          <span className="material-symbols-rounded text-lg">arrow_outward</span>
        </div>
        <a href={projectLink} className="absolute inset-0" target="_blank" rel="noopener noreferrer"></a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;
