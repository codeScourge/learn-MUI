import { Stack, TextField } from "@mui/material"
import { useState, MouseEvent } from "react"

const InputForm = () => {
    const [name, setName] = useState<string>("")

    const changeName = (e:any) => {setName(e.target.value)}

    return  <Stack>
                <TextField label="name" value={name} onChange={changeName} error={name.length < 3} helperText={name.length < 3 ? "Name hast to be at least 3 characters" : "Hello "+name} required/>
                <TextField label="password" helperText="Password has to be at least 6 characters long" type="password" required/>
            </Stack>
}

export const MuiTextfields = () => {
  return (
    <>
        <Stack spacing={3}>
            <InputForm/>
        </Stack>
    </>
  )
}
