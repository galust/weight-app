import Stack from '@mui/material/Stack';
import AddButton from "../add-modal/add-button";
import GetButton from "../get-button/get-button";
import ClearButton from "../clear-button/clear-button";


const ActionButtons = () => {
    return (
        <div className="action-buttons">
            <Stack spacing={2} direction="row" sx={{m: 1}}>
                <AddButton/>
                <GetButton/>
                <ClearButton/>
            </Stack>
        </div>
    )
}

export default ActionButtons;