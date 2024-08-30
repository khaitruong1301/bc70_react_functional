import React from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

function useRoute() {

    const navigate = useNavigate();
    const params = useParams();
    const [search,setSearch] = useSearchParams();
    

  return {
    navigate: navigate,
    params: params,
    search: search,
    setSearch: setSearch 
  }
}

export default useRoute