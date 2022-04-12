import React, { useState } from 'react'
import { Box, Stack, Grid, Paper, Typography } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CustomizedTables from "../dashboard/dashboardTable"
import ToolbarTable from "../dashboard/toolbarTable"
import BadgeIcon from '@mui/icons-material/Badge';
import { makeStyles } from '@mui/styles';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import StackedColumnChart from "./chartData";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import globe from "../../assets/images/globe.png";
import user from "../../assets/images/user-svgrepo-com(4).png";
import calender from "../../assets/images/calender-svgrepo-com.png";



const useStyles = makeStyles({
    root: {
        width: 195,

        '& .MuiOutlinedInput-root': {
            padding: "0px 10px !important",
            backgroundColor: "white",
            '& .MuiOutlinedInput-input': {
                padding: "6.5px 0px !important"
            }
        },
        '& .MuiTextField-root': {
            width: "82%",
            '& .MuiFormLabel-root': {
                left: 0,
                top: -7
            },

        }
    },
    date_root: {
        width: 170,
        '& .MuiOutlinedInput-input': {
            padding: "6.5px 20px !important",

        }, '& .MuiOutlinedInput-root': {
            backgroundColor: "white",
        }
    }
})
export const Dashboard = () => {
    const [value, setValue] = useState(null);
    const classes = useStyles()
    return (

        <Grid
            sx={{
                width: "100%",
                // height: "100vh",
                backgroundColor: "#EFEFEF",
                color: "white",
                display: "flex",
                justifyContent: "center",
                position: "relative"
            }}
            direction="column"
            alignItems="center"  >




            <Grid
                sx={{ height: "50px", backgroundColor: "#1B284D", position: "fixed", top: 0, left: 0, zIndex: 1201 }}
                item container alignItems={"center"} xs={12}>
                <Grid item container alignItems="center" xs={2}>
                    <Grid sx={{ marginRight: "10px" }} item><MenuIcon /></Grid>
                    <Grid item> <span>watsoo</span></Grid>
                </Grid>
                <Grid item xs={8}></Grid>
                <Grid
                    sx={{ paddingRight: "1rem" }}
                    item container justifyContent={"flex-end"} alignItems="center" xs={2}>
                    <Grid item><PersonOutlineIcon /></Grid>
                    <Grid item><span>User RST</span></Grid>
                </Grid>

            </Grid>
            <Grid
                sx={{ backgroundColor: "##EFEFEF",marginTop:"9px ", padding: "0px 2% ", position: "relative", top: "50px" }}
                item xs={12} container justifyContent={"center"} alignItems="center">

                {/* =========================================================================================================== */}
                <Grid id="first-row" sx={{ backgroundColor: "#EFEFEF", padding:"10px 0px", marginBottom: "51px", color: "#313131" }} item container justifyContent={"space-between"} alignItems={"center"}>

                    <Grid item xs={3} md={5} lg={7} xl={8} >
                        {/* <Grid item container xs={9} md={7} lg={5} xl={4} > */}

                        <Typography>Dashboard</Typography>
                    </Grid>
                    {/* <Grid  sx={{padding:0}} item container justifyContent="space-between" justifyItems="end" alignItems="center" xs={3} md={5} lg={7} xl={8}> */}

                    <Grid sx={{ backgroundColor: "#EFEFEF" }} item container justifyContent="flex-end" alignItems="center" xs={9} md={7} lg={5} xl={4}>
                        <Stack direction={"row"}>
                            <Grid sx={{ textAlign: "center" }} item xs={4}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}  >
                                    <DatePicker
                                        // label="Basic example"
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField
                                            placeholder={value}
                                            className={classes.date_root}
                                            sx={{


                                                svg: {
                                                    color: "#1592E6",
                                                    fontSize: '1rem'
                                                }


                                            }}
                                            {...params} />}
                                    />
                                </LocalizationProvider>
                                {/* <input style={{ borderRadius: "5px" }} type="date" /> */}
                            </Grid>
                            <Grid item sx={{ textAlign: "center" }} xs={4}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        // label="B"
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField
                                            className={classes.date_root}
                                            sx={{

                                                svg: {
                                                    color: "#1592E6",
                                                    fontSize: '1rem'
                                                }
                                            }}
                                            {...params} />}
                                    />
                                </LocalizationProvider>
                                {/* <input type="date" /> */}
                            </Grid>
                            <Grid
                                sx={{ textAlign: "center" }}
                                item xs={4}>
                                <Autocomplete
                                    className={classes.root}
                                    size="small"
                                    getOptionLabel={option => option}

                                    options={["rahul", "tarun"]}
                                    value="All Branches"
                                    renderInput={params => <TextField {...params} value="All Branches"
                                        sx={{

                                            svg: {
                                                color: "#1592E6",
                                                fontSize: '1.4rem'
                                            }
                                        }}
                                    ></TextField>}

                                />
                                {/* <select name="cars" id="cars">
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select> */}
                            </Grid>
                        </Stack>
                    </Grid>


                </Grid>
                {/* ============================================================================================================== */}
                <Grid id="second-row" item container rowGap={3} direction={"column"}
                    sx={{ backgroundColor: "#EFEFEF",  marginTop: "-3rem" }}
                >

                    <Grid item component={Paper} container
                        sx={{ backgroundColor: "#ffffff", borderLeft: 4, boxShadow: 1, borderColor: "#FFA3A3", padding: ".8rem 2%" }}
                    >
                        <Grid
                            sx={{ marginRight: "0", backgroundColor: "white" }}
                            item xs={12} md={6} >
                            <Grid sx={{}}>
                                <ToolbarTable src={globe} text="Summary" />
                                <CustomizedTables />
                            </Grid>
                        </Grid>
                        <Grid
                            sx={{
                                backgroundColor: "white",
                                marginLeft: "0"

                            }}
                            item xs={12} md={6} >
                            <Grid

                            >
                                <ToolbarTable src={user} text="Own Fleet" />
                                <CustomizedTables />
                            </Grid></Grid>

                    </Grid>
                    <Grid
                        component={Paper}
                        elevation={10}
                        sx={{ backgroundColor: "#ffffff", marginTop: "1rem",  padding: ".8rem 2%", borderLeft: 4, boxShadow: 1, borderColor: "#8DC7F4" }}
                        item container rowGap={2} direction="row">
                        <Grid item container alignItems={"center"} justifyContent="center" sx={{ backgroundColor: "white", height: "3rem" }} xs={12}>
                            <Grid item container xs={2} md={4}>
                                {/* <Grid item xs={6} container  spacing={2} direction="row"> */}
                                <img src={calender} alt="calender" />
                                <Typography>Over The Time</Typography>



                            </Grid>
                            {/* <Grid item xs={1}><Divider orientation='vertical' /></Grid> */}
                            <Grid container justifyContent="center" alignItems={"center"} item xs={10} md={8}>

                                <Grid item xs={3} container justifyContent={"center"} alignItems={"center"}  >

                                    <Checkbox defaultChecked sx={{ color: "#2A6297" }} />
                                    <Typography sx={{ fontSize: "1rem", color: "#2A6297" }}>Month Wise Comparisoin</Typography>

                                </Grid>
                                <Grid item xs={9} container justifyContent="flex-end" alignItems={"center"}  >
                                    <Stack direction={"row"}>
                                        <Grid sx={{ textAlign: "center" }} item xs={4}>
                                            <LocalizationProvider dateAdapter={AdapterDateFns}  >
                                                <DatePicker
                                                    // label="Basic example"
                                                    value={value}
                                                    onChange={(newValue) => {
                                                        setValue(newValue);
                                                    }}
                                                    renderInput={(params) => <TextField
                                                        placeholder={value}
                                                        className={classes.date_root}
                                                        sx={{


                                                            svg: {
                                                                color: "#1592E6",
                                                                fontSize: '1rem'
                                                            }


                                                        }}
                                                        {...params} />}
                                                />
                                            </LocalizationProvider>
                                            {/* <input style={{ borderRadius: "5px" }} type="date" /> */}
                                        </Grid>
                                        <Grid item sx={{ textAlign: "center" }} xs={4}>
                                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                <DatePicker
                                                    // label="B"
                                                    value={value}
                                                    onChange={(newValue) => {
                                                        setValue(newValue);
                                                    }}
                                                    renderInput={(params) => <TextField
                                                        className={classes.date_root}
                                                        sx={{

                                                            svg: {
                                                                color: "#1592E6",
                                                                fontSize: '1rem'
                                                            }
                                                        }}
                                                        {...params} />}
                                                />
                                            </LocalizationProvider>
                                            {/* <input type="date" /> */}
                                        </Grid>
                                        <Grid
                                            sx={{ textAlign: "center" }}
                                            item xs={4}>
                                            <Autocomplete
                                                className={classes.root}
                                                size="small"
                                                getOptionLabel={option => option}

                                                options={["rahul", "tarun"]}
                                                value="All Branches"
                                                renderInput={params => <TextField {...params} value="All Branches"
                                                    sx={{

                                                        svg: {
                                                            color: "#1592E6",
                                                            fontSize: '1.4rem'
                                                        }
                                                    }}
                                                ></TextField>}

                                            />

                                        </Grid>
                                    </Stack>



                                </Grid>
                            </Grid>



                        </Grid>
                        <Grid item xs={12}><Divider sx={{ width: "100%" }} /></Grid>
                        <Grid item sx={{
                            // width: "100%",
                            // padding: "0 2rem"
                        }} xs={12} id="chartContainer" >
                            <StackedColumnChart />
                        </Grid>


                    </Grid>

                    {/* ========================== THIRD ROW OF TABLE======================================================= */}

                       <Grid
                       sx={{  marginTop: "1rem", height: "800px",  borderLeft: 4, boxShadow: 1, borderColor: "#8DC7F4" }}
                       item container  spacing={0} justifyContent={"space-between"} direction="row"
                       >
                       <Grid component={Paper} item xs={6}></Grid>
                       <Grid component={Paper} item xs={6}></Grid>


                       </Grid>


                </Grid>

            </Grid>


        </Grid>
        // {/* </Box> */}
    )
}
