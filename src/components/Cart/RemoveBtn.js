import React, { Fragment } from "react";
import RemoveIcon from './RemoveIcon';
import Button from '@mui/material/Button';
const RemoveBtn = (props) => {
    return (
        <Button onClick={props.onClick} variant="text" ><RemoveIcon /></Button>

    )
}
export default RemoveBtn;