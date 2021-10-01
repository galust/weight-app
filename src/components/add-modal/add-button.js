import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import DialogTitle from '@mui/material/DialogTitle';
import AddForm from "./add-form";
import {useSelector} from "react-redux";
import {toggleModal} from "../../redux/main/slice";
import {useDispatch} from "react-redux";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    height: '500px',
    overflow: 'auto'

};


const AddButton = () => {
    const open = useSelector((state) => state.main.modal);
    const dispatch = useDispatch();


    return (
        <div>
            <Button variant="contained" onClick={()=> dispatch(toggleModal(true))}>Add Items</Button>
            <Modal
                open={open}
                onClose={()=>dispatch(toggleModal(false))}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <DialogTitle>Add Items</DialogTitle>
                    <AddForm/>
                </Box>
            </Modal>
        </div>
    );
}

export default AddButton;