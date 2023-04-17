import React from "react";

const Search = ({ searchInput, setSearchInput,newVideoData, handleAddVideo, handleNewVideoChange}) => {
  return (
    <div className="searchAndAddvideo">
      <form > 
        <input
          type="search"
          id="searchId"
          className="search-input shadow rounded form-control"
          placeholder="Search for a video..."
          value={searchInput}
          onChange={setSearchInput}
        />
      </form>
      {/* add video form */}
      <form class="form-horizontal p-4 rounded border border-info">
  <div class="form-group setLabels text-info">
    <label  for="title">Title -</label>
    <input type="text" class="form-control" name="title" placeholder="Add Video's Title" value={newVideoData.title} onChange={handleNewVideoChange}/>
  </div>
  <div class="form-group setLabels text-info text">
    <label for="url">Url -</label>
    <input type="url" class="form-control" name="url" placeholder="Add Youtube Url" value={newVideoData.url} onChange={handleNewVideoChange}/>
  </div>
  <button type="submit" class="btn btn-secondary p-2 ml-auto" onClick={(e)=>handleAddVideo(e)}>Add Video</button>
</form>
    </div> 
  );
};
export default Search;
