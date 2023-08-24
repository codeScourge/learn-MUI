import { Box, TextField, MenuItem } from "@mui/material"
import { useState, ChangeEvent } from "react"

export const MuiSelect = () => {
    const [country, setCountry] = useState<string>("")

    return (
        <Box width="250px">
            <TextField label="Select country" value={country} fullWidth select
            onChange={(event: ChangeEvent<HTMLInputElement>) => {setCountry(event.target.value as string)}}>
                <MenuItem value="IN">India</MenuItem>
                <MenuItem value="DE">Germany</MenuItem>
                <MenuItem value="RU">Russia</MenuItem>
            </TextField>
        </Box>
    )
}
