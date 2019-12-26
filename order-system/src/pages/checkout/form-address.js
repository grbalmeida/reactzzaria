import React, { useState, useEffect, useReducer } from 'react'
import { Grid } from '@material-ui/core'
import TextField from './text-field'

function FormAddress () {
  const [cep, setCep] = useState('')
  const [addressState, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    async function fetchAddress () {
      if (cep.length < 9) {
        return
      }

      const data = await fetch(`https://apps.widenet.com.br/busca-cep/api/cep/${cep}.json`)
      const result = await data.json()

      dispatch({
        type: 'UPDATE_FULL_ADDRESS',
        payload: result
      })
    }

    fetchAddress()
  }, [cep])

  function handleChangeCep (e) {
    setCep(cepMask(e.target.value))
  }

  function cepMask (value) {
    return value
      .replace(/\D+/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?/, '$1')
  }

  return (
    <Grid container spacing={2}>
      <TextField
        label='Zip code'
        xs={4}
        autoFocus
        value={cep}
        onChange={handleChangeCep}
      />
      <Grid item xs={8} />

      <TextField label='Street' xs={9} />
      <TextField label='Number' xs={3} />
      <TextField label='Complement' xs={12} />
      <TextField label='City' xs={9} />
      <TextField label='State' xs={3} />
    </Grid>
  )
}

function reducer (state, action) {
  if (action.type === 'UPDATE_FULL_ADDRESS') {
    return {
      ...state,
      ...action.payload
    }
  }

  return state
}

const initialState = {
  code: '',
  address: '',
  number: '',
  district: '',
  complement: '',
  city: '',
  state: '',
  error: null
}

export default FormAddress
