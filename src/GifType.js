import PropTypes from "prop-types";

const GifType = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  url: PropTypes.string,
  tags: PropTypes.string,
});

export default GifType;
