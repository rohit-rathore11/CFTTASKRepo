import React from "react";
import { Avatar, Box, Paper, Typography } from "@mui/material";
import ViewDayIcon from "@mui/icons-material/ViewDay";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";

const Sidebar=()=>{


    

return(
    <>
     <Box
        border={"1px solid black"}
        width={"30%"}
        height={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Paper elevation={3} style={{borderRadius:'50px'}}>
        <Box
          padding={5}
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={10}
        >
          <Box padding={"10px"} borderRadius={"10px"}>
            <Paper elevation={3}>
              <Box display={"flex"} padding={2} gap={2}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Box>
                  <Typography style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Hi,Readers
                  </Typography>
                  <Typography>Here's your news!</Typography>
                </Box>
              </Box>
            </Paper>
          </Box>
          <Paper elevation={3}>
            <Box style={{ padding: "20px 70px" }}>
              <Typography style={{ fontSize: "20px", fontWeight: "bold" }}>
                View Toggle
              </Typography>
              <Box display={"flex"} justifyContent={"center"}>
                <ViewDayIcon />
                <SpeakerNotesIcon />
              </Box>
            </Box>
          </Paper>
          <Paper elevation={3}>
            <Box style={{ padding: "20px 40px" }}>
              <Typography style={{ fontSize: "20px", fontWeight: "bold" }}>
                Have a feedback ?
              </Typography>
              <Typography
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  backgroundColor: "GrayText",
                  color: "black",
                  borderRadius: "15px",
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                We are listening!
              </Typography>
            </Box>
          </Paper>
        </Box>
        </Paper>
      </Box>
    
    </>
)


}
export default Sidebar