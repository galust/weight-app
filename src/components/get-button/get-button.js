import Button from "@mui/material/Button";
import {getItemsByWeight} from "../../helpers/utils";
import {useDispatch, useSelector} from "react-redux";
import {selectItems} from "../../redux/main/slice";


const GetButton = () => {
    const items = useSelector((state) => state.main.items);
    const dispatch = useDispatch();
    const handleClick = () => {
        if (!items || !items.length)
            return false;
        const data = getItemsByWeight(items,5);
        dispatch(selectItems(data));
    }

    return (
        <Button variant="contained" disabled={!items.length} onClick={handleClick}>Get Items</Button>
    )
}

export default GetButton;