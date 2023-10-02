import UserList from "../../components/user-list/user-list.component";
import Button from "@mui/material/Button";
import CustomIcon from "../../components/custom-icon/custom-icon.component";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteButton from "../../components/delete-btn/delete-btn.component";
import { Typography } from "@mui/material";
import { toggleTheme } from "../../features/theme/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import generateTheme from "../../theme/theme";

const FirstBody = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.theme.mode);
  const theme = generateTheme(themeMode);

  const clickhandler = () => {
    dispatch(toggleTheme());
  };

  return (
    <>
      <div>
        Test
        <CustomIcon
          onClick={() => console.log("Testing")}
          icon={<AddCircleIcon />}
        />
        <DeleteButton />
      </div>

      <Button variant="contained" onClick={clickhandler}>
        Click Me!
      </Button>
      <Typography
        variant="h3"
        color="secondary"
        onClick={() => console.log("hi")}
      >
        {theme.palette.mode} mode
      </Typography>

      <UserList />
    </>
  );
};

export default FirstBody;
