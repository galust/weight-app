import Button from "@mui/material/Button";
import {useDispatch} from "react-redux";
import {clearItems} from "../../redux/main/slice";

const ClearButton = () => {
    const dispatch = useDispatch();


    return (
        <Button variant="contained" onClick={() => dispatch(clearItems())}>Clear</Button>
    )
}

export default ClearButton;