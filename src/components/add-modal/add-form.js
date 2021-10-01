import {useState} from "react";
import { useDispatch } from 'react-redux'
import FormGroup from "./form-group";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {ReformatData} from "../../helpers/utils";
import {addItem,toggleModal} from "../../redux/main/slice";
import { useForm } from 'react-hook-form';


const AddForm = () => {
    const dispatch = useDispatch();
    const [groups,setGroups] = useState([
        {id:0}
    ])

    const addGroups = () => {
        const items = [...groups,{id:groups.length}];
        setGroups(items);
    }

    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm();


    const submitAddress = (rawData) => {
        const data = ReformatData(rawData);
        dispatch(addItem(data));
        dispatch(toggleModal(false));
    };

    return (
        <form className="add-form" onSubmit={handleSubmit(submitAddress)}>
            {
                groups.map((item)=>{
                    return <FormGroup key={item.id} row={item} register={register} errors={errors} control={control}/>
                })
            }
            <Stack spacing={2} direction="row" sx={{ my: 4 }}>
                <Button fullWidth onClick={addGroups} variant="contained">+</Button>
                <Button type="submit" fullWidth  variant="contained">Add</Button>
            </Stack>

        </form>
    )
}

export default AddForm;