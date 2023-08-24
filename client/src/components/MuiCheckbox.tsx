import { FormControl, FormControlLabel, FormGroup, Box, Checkbox, Switch} from "@mui/material"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import React, { useState } from "react"

const possibleSkills = ["HTML", "CSS", "JS", "REACT", "PYTHON"]

export const MuiCheckbox = () => {
    const [accepted, setAccepted] = useState<boolean>(false)
    const [skills, setSkills] = useState<string[]>([])
    const [idk, setIdk] = useState<boolean>(false)

    const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {setAccepted(event.target.checked)}
    const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {setIdk(event.target.checked)}
    const handleSkill = (event: React.ChangeEvent<HTMLInputElement>) => {skills.includes(event.target.value) ?
        setSkills(skills.filter((value) => value != event.target.value)):
        setSkills([...skills, event.target.value])}

  return (
    <Box bgcolor="#FFFFFF">
        <FormControlLabel label="snow?" control={
            <Checkbox checked={accepted} onChange={handleCheck} icon={<AcUnitIcon fontSize="small"/>} checkedIcon={<AcUnitIcon fontSize="large"/>}/>}
        />

        <FormControl>
            <FormGroup>
                {possibleSkills.map(possibleSkill =>
                    <FormControlLabel label={possibleSkill} key={possibleSkill} control={<Checkbox value={skills.includes(possibleSkill)} onChange={handleSkill} />} />
                )}
            </FormGroup>
        </FormControl>

        <FormControlLabel label="dark mode" control={<Switch checked={idk} onChange={handleSwitch}/>}/>
    </Box>
  )
}

// error={skills.length <= 0 ? true : false} row={false}
