import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const ActionButtons = () => {
    return (
        <div className="action-buttons">
            <Stack spacing={2} direction="row">
                <Button variant="contained">Get Items</Button>
                <Button variant="contained">Clear</Button>
            </Stack>
        </div>
    )
}

export default ActionButtons;