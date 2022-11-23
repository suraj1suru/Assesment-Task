import * as React from "react";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import axios from "axios";

export default function PaginationComp({currPage, setPages} :{currPage:any, setPages:any}) {



 
 const nextPage = 2;


 
  // console.log(users);


  const handlePrevPage = () => {
    if (currPage >= 1) {
     setPages(currPage - 1);
    }
  };
  const handleNextPage = () => {
    if(currPage < nextPage)
    setPages(currPage + 1);
  };

console.log(currPage);
  return (
    <>
      <button onClick={() => handlePrevPage()}>PREV</button>
      {currPage} of {nextPage}
      <button onClick={() => handleNextPage()}>NEXT</button>
    </>
  );
}
