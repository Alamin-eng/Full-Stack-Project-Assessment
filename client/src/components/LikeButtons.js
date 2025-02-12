import React from "react"
import { faThumbsUp, faThumbsDown} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LikeButtons({ ratings, updateRating, videoId }) {
  return (
    <div className="likesDiv p-2">
      <button
        type="button"
        class="btn btn-success col-3"
        onClick={(e) => updateRating(e, videoId, 1)}
      >
        <FontAwesomeIcon className="mr-1" icon={faThumbsUp} />
        Like
      </button>
      <p className="d-flex flex-column text-warning bg-dark p-2 rounded">
        {" "}
        <b className="text-warning">{ratings} </b>Votes{" "}
      </p>
      <button
        type="button"
        class="btn btn-danger col-3"
        onClick={(e) => updateRating(e, videoId, -1)}
      >
        <FontAwesomeIcon icon={faThumbsDown} />
        Dislike
      </button>
    </div>
  );
}
export default LikeButtons;
