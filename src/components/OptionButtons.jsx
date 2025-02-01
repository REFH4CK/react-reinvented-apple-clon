import PropTypes from "prop-types";

export function OptionButtons({ colors, classes, setShowInfo, info }) {
  return (
    <>
      <div className={`flex justify-center gap-4 z-10 bottom-0 w-full p-6`} style={{ backgroundColor: colors.bg, position: classes.container }}>
        <button
          style={{ backgroundColor: colors.learn }}
          className="text-white text-[18px] font-sfl py-2 px-4 rounded-lg shadow-lg"
          onClick={() => setShowInfo(!info)}
        >
          Learn More
        </button>
        <button
          style={{ backgroundColor: colors.buy }}
          className="text-[18px] font-sfl py-2 px-4 rounded-lg shadow-lg"
        >
          Buy Now
        </button>
      </div>
    </>
  );
}

OptionButtons.propTypes = {
  colors: PropTypes.shape({
    learn: PropTypes.string,
    buy: PropTypes.string,
    bg: PropTypes.string,
  }).isRequired,
  classes: PropTypes.shape({
    container: PropTypes.string,
    button: PropTypes.string
  }).isRequired,
  setShowInfo: PropTypes.func,
  info: PropTypes.any,
};
