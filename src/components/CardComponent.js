import React, { useContext } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { myContext } from '../context/DataContext';
import CircularProgress from '@mui/material/CircularProgress';

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" }
  return new Date(dateString).toLocaleDateString(undefined, options)
}


const CardComponent = ({count,text,type,color}) => {
  const {state} = useContext(myContext)
  const {isFetching} = state

  return (
    <Card sx={{minWidth:275,minHeight:150}}>
     
     {
       isFetching ? <CircularProgress/> : (
       <>
       <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {type}
        </Typography>

        <Typography variant="h5">
        {count}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         {formatDate(state.data?.lastUpdate)}
        </Typography>

        <Typography variant="body2">
          {text}
        </Typography>
        </CardContent>

        <Box sx={{height:8,backgroundColor:color}}>
        </Box>
        </>
       )
     }
     
       

    </Card>
  )
}

export default CardComponent