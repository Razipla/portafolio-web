/**
* @copyright 2025 allanalpizar
* @license Apache-2.0
*/
import PropTypes from "prop-types"

const SkillCard = ({ imgSrc, label, desc, classes }) => {
  return (
    <div className={`flex items-center gap-4 ring-2 ring-inset ring-[#273c75]/10 bg-white rounded-2xl p-4 hover:bg-[#7f8fa6]/10 transition-colors group ${classes}`}>
      <figure className="w-16 h-16 flex items-center justify-center bg-[#7f8fa6]/20 rounded-xl group-hover:bg-[#fbc531]/20 transition-colors">
        <img 
          src={imgSrc} 
          width={75}
          height={75}
          alt={label}
          className="object-contain"
        />
      </figure>
      <div>
        <h3 className="font-bold text-[#273c75] text-base">{label}</h3>
        <p className="text-[#273c75]/70 text-sm font-medium leading-snug">
          {desc}
        </p>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  imgSrc : PropTypes.string.isRequired,
  label : PropTypes.string.isRequired,
  desc : PropTypes.string.isRequired,
  classes : PropTypes.string,
};

export default SkillCard;