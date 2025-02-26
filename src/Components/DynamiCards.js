import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CircularProgress from "@mui/material/CircularProgress";
import ClearIcon from "@mui/icons-material/Clear";

const DynamiCards = () => {
  const [data, Setdata] = useState([]);
  // console.log("asdfghjiutrewasdvgbhj",data)
  const [loading, setloading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [toggle, settoggle] = useState(true);

  const fetchCardata = async () => {
    try {
      const responce = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const respncejson = await responce.json();
      if (!responce.ok) {
        console.log("something went wrong");
      }
      console.log("responce", respncejson);
      Setdata(respncejson);
    } catch (error) {
      console.log(error);
    }
  };

  const handleloading = () => {
    setloading(true);
  };
  const startIndex = (currentPage - 1) * 6;
  const endIndex = startIndex + 6;

  const currentCards = data.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleremoveitems = (cardid) => {
    console.log("cards id", cardid);
    const filtervaule = data.filter(
      (filtereditem) => filtereditem.id !== cardid
    );
    console.log("filtredvale", filtervaule);
    Setdata(filtervaule);
  };

  useEffect(() => {
    setTimeout(handleloading, 5000);
    console.log("onetimereder");
    fetchCardata();
  }, []);
  return (
    <>
      {!loading ? (
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          gap={5}
          border={"1px solid green"}
          height={"100vh"}
          overflow={"scroll"}
        >
          {data.map((cardsItem) => {
            return (
              <Box border={"1px solid black"}>
                <ClearIcon onClick={() => handleremoveitems(cardsItem.id)} />
                <Card sx={{ maxWidth: 345 }} key={cardsItem.id}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://picsum.photos/200/300"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        {cardsItem.body}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
            );
          })}
        </Box>
      )}
    </>
  );
};
export default DynamiCards;
