import axios from 'axios'
import { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'

const ExplorePage = () => {
  const params = useParams()
  const [pageNo,setPageNo] = useState(1)
  const [data,setData] = useState([])

  console.log("params",params.explore)
  
  const fetchData = useCallback(async () => {
    try {
        const response = await axios.get(`/discover/${params.explore}`,{
          params : {
            page : pageNo
          }
        })
        setData((preve)=>{
          return[
              ...preve,
              ...response.data.results
          ]
        })
    } catch (error) {
        console.log('error',error)
    }
  }, [params.explore, pageNo])

  const handleScroll = ()=>{
    if((window.innerHeight + window.scrollY ) >= document.body.offsetHeight){
      setPageNo(preve => preve + 1)
    }
  }

  useEffect(()=>{
    fetchData()
  },[pageNo, fetchData])

  useEffect(()=>{
      setPageNo(1)
      setData([])
      fetchData()
  },[params.explore, fetchData])

  useEffect(()=>{
      window.addEventListener('scroll',handleScroll)
  },[])



  return (
    <div className='py-16'>
        <div className='container mx-auto'>
            <h3 className='capitalize text-lg lg:text-xl font-semibold my-3'>{params.explore} Populares</h3>

            <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start'>
              {
                data.map((exploreData)=>{
                  return(
                    <Card data={exploreData} key={exploreData.id+"exploreSEction"} media_type={params.explore}/>
                  )
                })
              }
            </div>
        </div>
    </div>
  )
}

export default ExplorePage
