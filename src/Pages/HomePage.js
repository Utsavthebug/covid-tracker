import React, { useContext, useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import CardComponent from '../components/CardComponent';
import axios from "axios"
import Countrypicker from '../components/Countrypicker';
import { myContext } from '../context/DataContext';
import CircularProgress from '@mui/material/CircularProgress';
import Chart from '../Chart';

const HomePage = () => {
  const [country,setCountry]=useState("")
  const {state,dispatch} = useContext(myContext)

  const handleCountryChange= (data)=>{
    setCountry(data)
  }

const calculateCases = async ()=>{
  const uri = country!==""?`https://covid19.mathdro.id/api/countries/${country}`:`https://covid19.mathdro.id/api`

  try {
  
    dispatch({type:"FETCHING_STARTED"})
    const {data} = await axios.get(uri)
    dispatch({type:"FETCHING_SUCCESS",payload:data})
  } 
  catch (error) {
    dispatch({type:"FETCHING_ERROR"})
    console.log(error)
  }
}


  useEffect(()=>{
    calculateCases()

  },[country])

console.log(state.isFetching)

  return (
    <Container maxWidth="md">
      <Typography mt={4} style={{textAlign:'center'}} variant="h4">Covid-19</Typography>

      <Box mt={5} component="div" sx={{display:'flex',justifyContent:'space-between'}}>
      <CardComponent  count={state.data?.confirmed?.value}  type="Infected" text="Number of active cases of COVID-19" color="green"/>
      <CardComponent count={state.data?.recovered?.value}  type="Recovered" text="Number of  recoveries from COVID-19" color="yellow" />
      <CardComponent count={state.data?.deaths?.value}   type="Deaths" text="Number of the death caused by COVID-19" color="red"/>
      </Box>

      <Box component="div" style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:40}}>
        <Countrypicker handleCountryChange={handleCountryChange}/>
      </Box>

      {
        state.isFetching ? <CircularProgress/> : <Chart/>
      }
    
    </Container>
  )
}

export default HomePage