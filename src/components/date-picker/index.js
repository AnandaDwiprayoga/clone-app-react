import React, {useState} from 'react'
import {  useHistory } from "react-router-dom";
import "./style.css";

// main style file
import "react-date-range/dist/styles.css"
// theme css file
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";

// material
import {Button, PeopleIcon} from "./../../material-icons";


function DatePicker() {
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [endtDate, setEndtDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endtDate,
        key: "selection",
    };

    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate);
        setEndtDate(ranges.selection.endDate);
    }

    return (
        <div className='date-picker'>
            <DateRangePicker 
                ranges={[selectionRange]}
                onChange={handleSelect}
            />
            <h2>Number of guests <PeopleIcon /></h2>
            <input type="number" min={0} defaultValue={2}/>
            <Button
                onClick={() => history.push('./search')}
              >Search Airbnb
            </Button>
        </div>
    )
}

export default DatePicker

