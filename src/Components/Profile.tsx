import * as React from "react";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import axios from "axios";
import PaginationComp from "./PaginationComp";

export default function Profile() {
  const [currPage, setPages] = useState(1);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await axios.get(`https://reqres.in/api/users?page=${currPage}`);
    setUsers(response.data.data);
    // const total = await response.data;
    // setPages(total);
  };
    
  console.log(currPage);
  // console.log(users);
  console.log(users);
  useEffect(() => {
    getUsers();
  }, [currPage]);
  return (
    <>
      {users.length &&
        users.map((e) => {
          console.log(e);
          return (
            <div>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <img src={e["avatar"]} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {e["id"]}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {e["first_name"] + " " + e["last_name"]}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {e["email"]}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          );
        })}
   
   <PaginationComp currPage = {currPage} setPages = {setPages}/>
      </>
  );
}
