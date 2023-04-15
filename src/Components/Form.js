import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { data } from '../Components/json/dummydata';
import Userinfo from './Userinfo';



function Form() {

    const [show, setshow] = useState(false);
    const [entity, setentity] = useState()
    const [city, setcity] = React.useState('');
    const [userdata, setdata] = React.useState('');
    const [able, setDisable] = React.useState();

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const code = watch('pinCode');

    const onsubmit = ((data) => {
      Object.assign(data,{'city':able})
      setshow(true)
      setdata(data)
       console.log(data)
    });

    const handleChange = (event) => {

        setcity(event.target.value);
       
    };


    const checkCode = (() => {
        if (code?.length > 5)
            setentity(code)
    })


    const setCode = (() => {
        data.map((el) => {
            if (el.postcode === entity)
                setDisable(el.city)
                
        })
    })

    useEffect(() => {
        checkCode()
        if (entity !== undefined) {
            setCode()
        }
    }, [entity, code])

    return (
        <div className="flex flex-col">
            <form onSubmit={handleSubmit(onsubmit)} className="bg-white  p-10">
            <div>
                <label>Name</label>
                <input type={'text'} className="ml-5 bg-slate-300" defaultValue={"name"} {...register('name')} />
            </div>
            <div className='mt-10'>
                <label>Pin code</label>
                <input className="ml-5 bg-slate-300" defaultValue={""} {...register('pinCode')} />
            </div>
            <div className="mt-5">

                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-disabled-label">city</InputLabel>
                        <Select
                            labelId="demo-simple-select-disabled-label"
                            id="demo-simple-select-disabled"
                            label="city"
                            onChange={handleChange}
                        >
                            <MenuItem value={able}>{able}</MenuItem>


                        </Select>
                    </FormControl>
                </Box>
            </div>
            <button className="bg-black text-white w-full mt-5 p-5">Submit</button>
        </form>
       {show &&
        <div className="bg-white mt-10 p-10">
            <Userinfo data={userdata}/>
       </div>

       }
        </div>
    )


}

export default Form





