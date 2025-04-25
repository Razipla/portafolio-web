/**
 * @copyright 2025 allanalpizar
 * @license Apache-2.0
 */

import PropTypes from "prop-types";
import Lottie from "lottie-react";

const SoftSkillCard = ({ title, description, animation }) => {
  return (
    <div className="bg-[#f1f2f6] border border-[#dcdde1] rounded-2xl p-6 shadow-md transition transform hover:-translate-y-1">
      <div className="w-full h-48 mb-4 max-h-[12rem] sm:h-40 min-w-0 bg-[#f1f2f6]">
        <Lottie animationData={animation} loop={true} 
        className="max-w-[150px] sm:max-w-[120px] md:max-w-[150px] w-full h-auto" />
      </div>
      <h3 className="text-xl font-bold text-[#273c75] mb-2">{title}</h3>
      <p className="text-[#1a1a1a] font-medium">{description}</p>
    </div>
  );
};

SoftSkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  animation: PropTypes.object.isRequired,
};

export default SoftSkillCard;

