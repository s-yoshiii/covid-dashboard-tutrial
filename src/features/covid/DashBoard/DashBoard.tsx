import React, { FC, useEffect } from "react";
import styles from "./DashBoard.module.css";
import { makeStyles } from "@material-ui/core";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../app/hooks";
import { fetchAsyncGet, fetchAsyncGetDaily, selectData } from "../covidSlice";
const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  content: {
    marginTop: 85,
  },
}));
const DashBoard: FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const data = useSelector(selectData);
  useEffect(() => {
    dispatch(fetchAsyncGet());
    dispatch(fetchAsyncGetDaily);
  }, [dispatch]);
  return <div></div>;
};

export default DashBoard;
