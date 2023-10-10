// const express = require("express");
// const app = express();
// // added cors because client server fetch were showing blocking messaging and suggested cors()
// const cors = require("cors");
// const { Pool } = require("pg");
// const env = require("dotenv");

// const port = process.env.PORT || 5001;
// app.use(express.json());

// const jsonData = require("./exampleresponse.json");

// app.use(cors()); 
// env.config();

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });


// // GET "/"
// app.get("/", (req, res) => {
//  //Delete this line after you've confirmed your server is running
// //   res.json(fruits);
//   pool
//     .query("SELECT * FROM url")
//     .then((result) => res.json(result.rows))
//     .catch((error) => {
//       console.error(error);
//       res.status(500).json(error);
//     });
// });

// // Post method 
// app.post("/", (req, res) => {
//   // Delete this line after you've confirmed your server is running
//   const newVideo = req.body;

//   if (!newVideo.title || !newVideo.url) {
//     res.send({ result: "failure", message: "Video could not be saved" });
//   } else {
//     const query =
//       "INSERT INTO url (title,url,rating) VALUES ($1, $2, $3) RETURNING id"; // notice how we returned id

//     pool.query(query, [newVideo.title, newVideo.url, 0], (error, results) => {
//       if (error) {
//         throw error;
//       }
//       console.log(results.rows);
//       res.status(200).send(results.rows[0]);
//     });
//   }
// });

// // GET "/{id}"
// app.get("/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   pool
//     .query("SELECT * FROM url WHERE id=$1", [id])
//     .then((result) => res.json(result.rows[0]))
//     .catch((error) => {
//       console.error(error);
//       res.status(500).json(error);
//     });
//   // const filterVideo = videos.filter((vid) => vid.id === id);
//   // filterVideo.length === 0
//   //   ? res.send("Video not found")
//   //   : res.json(filterVideo[0]);
// });

// // DELETE "/{id}"
// app.delete("/:id", (req, res) => {
//   const id = parseInt(req.params.id); // notice it as the req.params.id is originally a string
//   pool
//     .query("DELETE FROM url WHERE id=$1", [id])
//     .then(() => res.send(`Video ${id} deleted!`))
//     .catch((error) => {
//       console.error(error);
//       res.status(500).json(error);
//     });
  
// });

// // listen to port
// app.listen(port, () => console.log(`Listening on port ${port}`));


// //--------------- ELEPHANT SQL SERVER.JS CODES BELOW , ABOVE WAS THE ORIGINAL HEROKU SEVER.JS CODES ------

// const express = require("express");
// const cors = require("cors");
// const app = express();
// app.use(cors());
// //pg 
// let pg = require("pg");

// const env = require("dotenv");

// // use express.json is important
// app.use(express.json());

// env.config();

//  const jsonData = require("./exampleresponse.json");

// // const jsonData = require("../exampleresponse.json");

// let conString = "ElephantSql data url here"
// let client = new pg.Client(conString);

// const port = process.env.PORT || 3002;

// app.get("/urls", async (req, res) => {
//   try {
//     client.connect();
//     const result = await client.query("SELECT * FROM urls");
//     res.json(result.rows);
// // res.send(jsonData)
   
//   } catch (error) {
//     console.error("Error executing query:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // Post method 
// app.post("/urls", (req, res) => {
//   // Delete this line after you've confirmed your server is running
//   const newVideo = req.body;

//   if (!newVideo.title || !newVideo.url) {
//     res.send({ result: "failure", message: "Video could not be saved" });
//   } else {
//     const query =
//       "INSERT INTO urls (title,url,rating) VALUES ($1, $2, $3) RETURNING id"; // notice how we returned id

//     client.query(query, [newVideo.title, newVideo.url, 0], (error, results) => {
//       if (error) {
//         throw error;
//       }
//       console.log(results.rows);
//       res.status(200).send(results.rows[0]);
//     });
//   }
// });

// // GET "/{id}"
// app.get("/urls:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   client
//     .query("SELECT * FROM urls WHERE id=$1", [id])
//     .then((result) => res.json(result.rows[0]))
//     .catch((error) => {
//       console.error(error);
//       res.status(500).json(error);
//     });
//   // const filterVideo = videos.filter((vid) => vid.id === id);
//   // filterVideo.length === 0
//   //   ? res.send("Video not found")
//   //   : res.json(filterVideo[0]);
// });

// // DELETE "/{id}"
// app.delete("/urls:id", (req, res) => {
//   const id = parseInt(req.params.id); // notice it as the req.params.id is originally a string
//   client
//     .query("DELETE FROM urls WHERE id=$1", [id])
//     .then(() => res.send(`Video ${id} deleted!`))
//     .catch((error) => {
//       console.error(error);
//       res.status(500).json(error);
//     });
   
// });

// // listen to port
// app.listen(port, () => console.log(`Listening on port ${port}`));