import express from "express";
import con from "./config.js";
import cors from "cors";

const app = express();

//Middleware to enable request from all domain.
app.use(cors());

app.use(express.urlencoded({ extended: true }));

//USING JOIN
app.get("/", (req, res) => {
  con.query(
    "SELECT t.id AS topic_id, t.name AS topic_name,c.name AS course_name,s.speaker_name,c.price_range,c.created_on FROM course_speakers AS cs INNER JOIN speakers AS s ON cs.speaker_id = s.id INNER JOIN courses AS c ON cs.course_id = c.id INNER JOIN topics AS t ON c.topic_id = t.id;",
    (err, resp) => {
      if(err){
      res.send(err)
    }else{
      res.send(resp)
    }
    }
  );
});

app.get("/course_speakers", (req, res) => {
  con.query("SELECT * FROM course_speakers", (err, resp) => {
    res.send(resp);
  });
  console.log(res);
});

app.get("/courses", (req, res) => {
  con.query("SELECT * FROM courses", (err, resp) => {
    res.send(resp);
  });
  console.log(res);
});

app.get("/speakers", (req, res) => {
  con.query("SELECT * FROM speakers", (err, resp) => {
    res.send(resp);
  });
  console.log(res);
});

app.get("/topics", (req, res) => {
  con.query("SELECT * FROM topics", (err, resp) => {
    res.send(resp);
  });
  console.log(res);
});
 
app.listen("4000", () => {
  console.log("listening on");
});
