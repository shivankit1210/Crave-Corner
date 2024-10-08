import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BiSolidCart, BiSolidCartAdd } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { slice1_Pop, slice1_Push } from "../../store/slice/breakfastSlice";

const Purchase = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 30,
});
const Cards = ({ item }) => {
  const dispatch = useDispatch();
  const [purchase, setPurchase] = useState(false);
  const handlePop = (item) => {
    setPurchase(false);
    dispatch(slice1_Pop(item));
    console.log("pop", item);
  };
  const handlePush = (item) => {
    setPurchase(true);
    dispatch(slice1_Push(item));
    console.log("push", item);
  };
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  // const theme = useTheme();
  return (
    <Card sx={{ display: "flex", width: 345, height: 140 }} key={item.id}>
      <CardMedia
        component="img"
        sx={{ width: 120, padding: "10px 10px", borderRadius: "50%" }}
        image={item.image}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div">{item.title}</Typography>
          <Typography
            color="text.secondary"
            fontSize={15}
            component="div"
            marginTop={0.5}
          >
            {item.heading}
          </Typography>
          <Typography
            fontSize={20}
            component="div"
            marginTop={0.5}
            style={{ display: "flex", alignItems: "center" }}
          >
            <BiRupee fontSize={25} />
            {item.pay}
          </Typography>
          <Purchase>
            <Typography width={100}>
              {Array.from({ length: item.rating }, (_, i) => (
                <AiFillStar key={i} style={{ color: `var(--maincol)` }} />
              ))}
            </Typography>
            <Typography>
              {purchase ? (
                <BiSolidCartAdd
                  onClick={() => handlePop(item)}
                  style={{ fontSize: 25, color: "rgb(142, 181, 11)" }}
                />
              ) : (
                <BiSolidCart
                  onClick={() => handlePush(item)}
                  style={{ fontSize: 25 }}
                />
              )}
            </Typography>
          </Purchase>
        </CardContent>
      </Box>
    </Card>
  );
};
export default Cards;
