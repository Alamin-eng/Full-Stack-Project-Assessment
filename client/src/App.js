import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/main";
import SearchAndAddVideo from "./components/SearchAndAddVideo";
import Footer from "./components/Footer";
import "./App.css";



function App() {
  const [status, setStatus] = useState("fetching");
  const [searchTerm, setSearchTerm] = useState("");
  const [videos, setVideos] = useState([]); // changed to empty array[] from data
  const [newVidoeData, setNewVideoData] = useState({
    id: 0,
    title: "",
    url: "",
    rating: 0,
  });

  // use effect added
  useEffect(() => {
    fetch(`https://testing-urls.onrender.com/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVideos(data);
        setStatus("found data")
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //Handle search
  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }

  // add video handle function
  function handleNewVideoSubmit(e) {
    e.preventDefault();
    console.table(videos)
    console.log(newVidoeData)
    
    // setVideos([newVidoeData, ...videos]);

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({title:newVidoeData.title , url:newVidoeData.url}),
      };
      fetch("https://testing-urls.onrender.com/", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          let newUrl = {
            id: data.id,
            title: newVidoeData.title,
            url: newVidoeData.url,
            rating: 0,
          };
          newVidoeData.id = data.id;
          setVideos([...videos, newUrl]);
        });
  
      console.log(newVidoeData);
  }
  // handle add change fucntion
  function handleNewVideoChange(e) {
    setNewVideoData({ ...newVidoeData, [e.target.name]: e.target.value });
  }
  // up vote
  function updateRating(e, id, change) {
    e.preventDefault();
    const currentVideo = videos.find((video) => video.id === id);
    currentVideo.rating += change;
    const updatedVideos = videos.map((video) =>
      video.id === id ? currentVideo : video
    );
    setVideos(updatedVideos);
  }
  // Delete button
  function deleteVideo(e, id) {
    e.preventDefault();
    const updatedVideos = videos.filter((video) => video.id !== id);
      setVideos(updatedVideos)
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      
    };
    fetch(`https://testing-urls.onrender.com//${id}`, requestOptions).then(
      (response) => response.json()
    );
  }
  return (
    <div className="App">
      {status === "found data" ? (
        <>
          <Header />
          <SearchAndAddVideo
            searchInput={searchTerm}
            setSearchInput={handleSearch}
            newVideoData={newVidoeData}
            handleAddVideo={handleNewVideoSubmit}
            handleNewVideoChange={handleNewVideoChange}
          />
          <Main
            data={videos}
            searchInput={searchTerm}
            updateRating={updateRating}
            deleteVideo={deleteVideo}
          />
          {/* <Main data={videos} searchInput={searchTerm} updateRating={updateRating} deleteVideo={deleteVideo}/> */}
          <Footer />
        </>
      ) : (
        <div className="loading">
        <h3>"Loading Videos Please Wait ... "</h3>
        </div>
      )}
    </div>
  );
}

export default App;

