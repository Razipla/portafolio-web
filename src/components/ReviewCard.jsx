/**
 * @copyright 2025 allanalpizar
 * @license Apache-2.0
 */
import PropTypes from "prop-types";

const ReviewCard = ({ title, icon, content }) => {
  return (
    <div className="bg-zinc-800 p-6 rounded-xl w-full max-w-sm shadow-lg text-white">
      <div className="flex items-center gap-2 mb-4">
        <span className="material-symbols-rounded text-yellow-400 text-2xl">
          {icon}
        </span>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>

      {Array.isArray(content) ? (
        <ul className="space-y-3 pl-2">
          {content.map(({ title, desc }, idx) => (
            <li key={idx}>
              <p className="text-yellow-300 font-semibold">{title}</p>
              <p className="text-sm text-zinc-300">{desc}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-zinc-300 leading-relaxed">{content}</p>
      )}
    </div>
  );
};

ReviewCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        desc: PropTypes.string
      })
    )
  ]).isRequired
};

export default ReviewCard;
