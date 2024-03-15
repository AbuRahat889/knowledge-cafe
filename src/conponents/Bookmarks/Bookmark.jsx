import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
    const {title} = bookmark;
    return (
        <div>
            <h1 className="bg-white p-4 rounded-lg mt-5 text-xl ">{title}</h1>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
  };

export default Bookmark;