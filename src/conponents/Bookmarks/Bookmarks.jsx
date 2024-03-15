
import Bookmark from "./Bookmark";

const Bookmarks = ({ bookmarks, readTime }) => {
  return (
    <div className="md:w-1/3  bg-gray-400 rounded-lg p-4">
        <div>
        <h1 className="text-2xl">total time : {readTime}</h1>
        </div>

        <h1 className="text-4xl">Bookmarked Blogs:{bookmarks.length}</h1>
        {bookmarks.map((bookmarkInfo) => {
          <Bookmark key={bookmarks.id} bookmark={bookmarkInfo}></Bookmark>
            })
        }
    
    </div>
  );
};

export default Bookmarks;
