import {
    Button, Stack, IconButton, ButtonGroup,
    ToggleButton, ToggleButtonGroup
} from "@mui/material"

import AddReactionIcon from '@mui/icons-material/AddReaction';

import {
    useState,
    MouseEvent, FC
} from "react";

// install and get a collection of ready to use icons at: https://mui.com/material-ui/material-icons/

interface checkboxProps {
    options: [string, string, string]
}

const MuiCheckboxes:FC<checkboxProps> = ({options}) => {
    const [selected, setSelected] = useState<string[]>([])

    console.log(selected)
    const handleCheckboxChange = (
        _event: MouseEvent,
        values: string[]
    ) => {setSelected(values)}

    return  <>
                <ToggleButtonGroup onChange={handleCheckboxChange} value={selected}>
                    <ToggleButton value={options[0]}>{options[0]}</ToggleButton>
                    <ToggleButton value={options[1]}>{options[1]}</ToggleButton>
                    <ToggleButton value={options[2]}>{options[2]}</ToggleButton>
                </ToggleButtonGroup>
            </>
}

export const MuiButton = () => {


    return (
        <>
            <Stack spacing={2} direction={"row"}>
                <Button variant="text" >ghost</Button>
                <Button variant="contained" color="secondary" size="large">primary</Button>
                <Button variant="outlined" startIcon={<AddReactionIcon/>} endIcon={<AddReactionIcon/>}>secondary</Button>
                <IconButton>
                    <AddReactionIcon/>
                </IconButton>
            </Stack>

            <ButtonGroup variant="contained">
                <Button>We</Button>
                <Button>are</Button>
                <Button>together!</Button>
            </ButtonGroup>

            <MuiCheckboxes options={["a", "b", "c"]}/>
        </>
    )
}

// The stack component is an equivallent of doing a flex-box
// Buttons have 3 variant for different actions

// MUI has 6 different (configurable) colors: primary, secondary, error, warning, info, and success


// The checkbox (or radio if you add "exclusive" prop) takes value and onChange
