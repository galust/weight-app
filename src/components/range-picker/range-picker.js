import {Fragment,useState} from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import DateRangePicker from "@mui/lab/DateRangePicker";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const RangePicker = ({name,rowId,onChange,error,...rest}) => {
    const [value, setValue] = useState([null, null]);
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateRangePicker
            {...rest}
            name={name}
            startText="Start Date"
            endText="End Date"
            value={value}
            onChange={(newValue) => {
                setValue(newValue);
                const val = !newValue[0] || !newValue[1] ? '' : [newValue[0].getTime(),newValue[1].getTime()];
                onChange(val)
            }}
            renderInput={(startProps, endProps) => (
                <Fragment>
                    <TextField {...startProps} name={`start:${rowId}`} error={error && !value[0]}/>
                    <Box sx={{ mx: 2 }}> to </Box>
                    <TextField {...endProps} name={`end:${rowId}`}  error={error && !value[1]}/>
                </Fragment>
            )}
        />
        </LocalizationProvider>
    )
}

export default RangePicker;