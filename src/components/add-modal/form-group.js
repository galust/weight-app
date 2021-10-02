import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import RangePicker from "../range-picker/range-picker";
import {Controller} from "react-hook-form";

import './add-modal.scss'

const FormGroup = ({row, errors, control}) => {
    return (
        <div className="form-group">
            <FormControl fullWidth sx={{my: 1}}>
                <InputLabel>Name</InputLabel>
                <Controller
                    rules={{required: true}}
                    name={`name:${row.id}`}
                    control={control}
                    render={({field: {onChange}}) => {
                        return (
                            <OutlinedInput
                                control={control}
                                error={!!errors[`name:${row.id}`]}
                                defaultValue=""
                                fullWidth
                                label="Name"
                                onChange={onChange}
                                name={`name:${row.id}`}
                            />)
                    }}
                />
            </FormControl>
            <FormControl fullWidth sx={{my: 1}}>
                <InputLabel>Price</InputLabel>
                <Controller
                    rules={{
                        required: true,
                        validate: {
                            positiveNumber: (value) => parseFloat(value) > 0
                        }
                    }}
                    name={`price:${row.id}`}
                    control={control}
                    render={({field: {onChange}}) => {
                        return <OutlinedInput
                            error={!!errors[`price:${row.id}`]}
                            defaultValue=""
                            endAdornment={<InputAdornment position="end">$</InputAdornment>}
                            label="Price"
                            name={`price:${row.id}`}
                            onChange={onChange}
                        />
                    }}
                />
            </FormControl>
            <FormControl fullWidth sx={{my: 1}}>
                <InputLabel>Weight</InputLabel>
                <Controller
                    rules={{
                        required: true,
                        validate: {
                            positiveNumber: (value) => parseFloat(value) > 0
                        }
                    }}
                    name={`weight:${row.id}`}
                    control={control}
                    render={({field: {onChange}}) => {
                        return <OutlinedInput
                            error={!!errors[`weight:${row.id}`]}
                            defaultValue=""
                            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                            label="Weight"
                            name={`weight:${row.id}`}
                            onChange={onChange}
                        />
                    }}
                />
            </FormControl>
            <FormControl fullWidth sx={{my: 1}}>

                <Controller
                    rules={{required: true}}
                    name={`dates:${row.id}`}
                    control={control}
                    render={({field: {onChange}}) => {
                        return (
                            <RangePicker
                                rowId={row.id}
                                error={!!errors[`dates:${row.id}`]}
                                name={`dates:${row.id}`}
                                onChange={onChange}
                            />
                        )
                    }}
                />
            </FormControl>
        </div>
    )
}

export default FormGroup;