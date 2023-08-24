import {
    Box, Stack,
    Button, ButtonGroup,
    FormControl, FormGroup, FormControlLabel,
    TextField,
    Typography,
    Radio, RadioGroup,
    Checkbox, FormLabel,
} from '@mui/material'

import "./ps.scss"

import React, {useState} from 'react'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const possibleSkills = ["HTML", "CSS", "JS", "ReactJS", "NextJS"];
const possibleExperiences = ["0-1", "2-3", "4-5", "6+"];

type User = {
    email: string,
    password: string,

    fname: string,
    sname: string,

    experience: string | null
    skills: string[]

}

const AccountSettings = ({user, setUser}: {user: User, setUser: React.Dispatch<React.SetStateAction<User>>}) => {
    const setEmail = (event: React.ChangeEvent<HTMLInputElement>) => {setUser({...user, email: event.target.value})}
    const setPassword = (event: React.ChangeEvent<HTMLInputElement>) => {setUser({...user, password: event.target.value})}


    return  <FormControl>
                <Stack direction={"column"} gap={"10px"}>
                    <TextField label="email" value={user.email} onChange={setEmail}/>
                    <TextField label="password" value={user.password} onChange={setPassword} type='password'/>
                </Stack>
            </FormControl>
}



const PersonalSettings = ({user, setUser}: {user: User, setUser: React.Dispatch<React.SetStateAction<User>>}) => {
    const setFname = (event: React.ChangeEvent<HTMLInputElement>) => {setUser({...user, fname: event.target.value})}
    const setSname = (event: React.ChangeEvent<HTMLInputElement>) => {setUser({...user, sname: event.target.value})}


    return  <FormControl>
                <Stack direction={"column"} gap={"10px"}>
                    <TextField label="first name" value={user.fname} onChange={setFname}/>
                    <TextField label="second name" value={user.sname} onChange={setSname}/>
                </Stack>
            </FormControl>
}



const SkillSettings = ({user, setUser}: {user: User, setUser: React.Dispatch<React.SetStateAction<User>>}) => {
    const setExperience = (event: React.ChangeEvent<HTMLInputElement>) => {setUser({...user, experience: event.target.value})}
    const setSkills = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newSkill = event.target.value
        console.log(newSkill, user.skills)
        if (user.skills.includes(newSkill)) {
            setUser({...user, skills: user.skills.filter(skill => {return skill != newSkill})})
        }   else {
            {setUser({...user, skills: [...user.skills, newSkill]})}
        }
    }


    return  <Stack>
                <FormControl>
                    <FormLabel >Years of experience</FormLabel>
                    <RadioGroup value={user.experience} onChange={setExperience}>
                        {possibleExperiences.map(exp =>
                            <FormControlLabel label={exp} key={exp} control={<Radio value={exp}/>}/>
                        )}
                    </RadioGroup>
                </FormControl>

                <FormControl>
                    <FormLabel >Webdev skils</FormLabel>
                    <FormGroup >
                        {possibleSkills.map(skill =>
                            <FormControlLabel label={skill} key={skill} control={<Checkbox value={skill} checked={user.skills.includes(skill)} onChange={setSkills}/>}></FormControlLabel>
                        )}
                    </FormGroup>
                </FormControl>
            </Stack>

}



export const ProgrammerSignup = () => {
    const [step, setStep] = useState<number>(0)
    const [user, setUser] = useState<User>({
        email:"",
        password:"",
        fname:"",
        sname:"",
        experience: null,
        skills:[]
    })

    let blocked: boolean = false

    if ((step >= 0 && (user.email == "" || user.password == "")) || (step >= 1 && (user.fname == "" || user.sname == "")) || (step == 2 && user.experience == null)) {
        blocked = true
    }


    const nextStep = () => {step == 2 ? location.reload(): setStep(step+1)}
    const previousStep = () => {setStep(step-1)}

    return  <Box display="flex" flexDirection="column" width="300px" gap="30px">
                {step == 0 ? <AccountSettings user={user} setUser={setUser}/> : step == 1 ? <PersonalSettings user={user} setUser={setUser}/> : step == 2 ? <SkillSettings user={user} setUser={setUser}/> : <Typography variant='h2'>Welcome!</Typography>}
                <ButtonGroup fullWidth>
                    <Button startIcon={<ArrowBackIcon/>} disabled={step == 0 ? true : false} onClick={previousStep}>previous</Button>
                    <Button endIcon={<ArrowForwardIcon/>} disabled={step == 3 || blocked ? true : false} onClick={nextStep}>{step == 2 ? <>submit</> : <>next</>}</Button>
                </ButtonGroup>
            </Box>
}
