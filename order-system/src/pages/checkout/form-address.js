import React, { useState, useEffect, useReducer } from 'react'
import { CircularProgress, Grid } from '@material-ui/core'
import TextField from './text-field'

function FormAddress () {
  const [cep, setCep] = useState('')
  const [addressState, dispatch] = useReducer(reducer, initialState)
  const [fetchingCep, setFetchingCep] = useState(false)

  useEffect(() => {
    async function fetchAddress () {
      if (cep.length < 9) {
        return
      }

      setFetchingCep(true)

      const data = await fetch(`https://apps.widenet.com.br/busca-cep/api/cep/${cep}.json`)
      const result = await data.json()

      setFetchingCep(false)

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

  function handleChangeField (e) {

  }

  return (
    <Grid container spacing={2} alignItems='center'>
      <TextField
        label='Zip code'
        xs={4}
        autoFocus
        value={cep}
        onChange={handleChangeCep}
        disabled={fetchingCep}
      />
      <Grid item xs={8}>
        {fetchingCep && <CircularProgress size={20} />}
      </Grid>

      {[
        {
          label: 'Street',
          xs: 9,
          name: 'address'
        },

        {
          label: 'Number',
          xs: 3,
          name: 'number'
        },

        {
          label: 'Complement',
          xs: 12,
          name: 'complement'
        },

        {
          label: 'City',
          xs: 9,
          name: 'city'
        },

        {
          label: 'State',
          xs: 3,
          name: 'state'
        }
      ].map((field) => (
        <TextField
          {...field}
          key={field.name}
          value={addressState[field.name]}
          onChange={handleChangeField}
          disabled={fetchingCep}
        />
      ))}
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
