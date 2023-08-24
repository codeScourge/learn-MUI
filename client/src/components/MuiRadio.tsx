import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText } from "@mui/material"
import React, { useState } from "react"

const ExperienceRadio = () => {
    const [experiece, setExperience] = useState<string | null>(null)
    return  <FormControl error={experiece == null ? true : false}>
                <FormLabel >Years of experience</FormLabel>
                <RadioGroup name="experience-group" value={experiece} onChange={(event:React.ChangeEvent<HTMLInputElement>) => {setExperience(event.target.value)}}>
                  <FormControlLabel control={<Radio/>} label="0-2" value="0-2"/>
                  <FormControlLabel control={<Radio/>} label="3-4" value="3-4"/>
                  <FormControlLabel control={<Radio/>} label="5-6" value="5-6"/>
                  <FormControlLabel control={<Radio/>} label="7+" value="7+"/>
                </RadioGroup>
            </FormControl>
}

export const MuiRadio = () => {
  return (
    <Box>
      <ExperienceRadio/>
    </Box>
  )
}

