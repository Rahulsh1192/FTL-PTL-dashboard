import React from 'react'
import { Box, Grid, Button, Typography, Stack } from '@mui/material'
import SummarizeIcon from '@mui/icons-material/Summarize';
import { ContactSupportOutlined } from '@mui/icons-material';
import globe from "../../assets/images/globe.png";
import user from "../../assets/images/user-svgrepo-com(4).png";
function ToolbarTable({src,text}) {
    console.log(text)
    return (
        <Box
            sx={{ width: "100%",color:"#1B284D" }}
        >
            <Grid container justifyContent={"space-between"} alignItems="center">
                <Grid item xs={3} lg={6} container alignItems={"center"}>
                <Grid><img src={src} alt="globe"/></Grid>
                   <Grid><Typography>{text}</Typography></Grid>
                </Grid>
                <Grid container alignItems="center" item xs={9} lg={6}>
                    <Grid item xs={3}><Typography>Clients</Typography></Grid>
                    <Grid item xs={9}>
                        <Stack direction="row"  spacing={2}>
                            <Button sx={{color:"#1B284D",backgroundColor:"#EDEDED"}} variant="contained">10(FTL)</Button>
                            <Button sx={{color:"#1B284D" ,backgroundColor:"#EDEDED"}} variant="contained" >
                                05(PTL)
                            </Button>
                            <Button sx={{color:"#1B284D" ,backgroundColor:"#EDEDED"}} variant="contained" >
                                05(FIXED)
                            </Button>
                        </Stack>
                    </Grid>


                </Grid>

            </Grid>
        </Box>
    )
}

export default ToolbarTable