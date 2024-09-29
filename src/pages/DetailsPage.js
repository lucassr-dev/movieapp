import { useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import useFetchDetails from '../hooks/useFetchDetails'
import { useSelector } from 'react-redux'
import moment from 'moment'
import 'moment/locale/pt-br';
import Divider from '../components/Divider'
import HorizontalScollCard from '../components/HorizontalScollCard'
import VideoPlay from '../components/VideoPlay'

moment.locale('pt-br');

const DetailsPage = () => {
  const params = useParams()
  const imageURL = useSelector(state => state.movieData.imageURL)
  const { data } = useFetchDetails(`/${params?.explore}/${params?.id}`)
  const { data :castData} = useFetchDetails(`/${params?.explore}/${params?.id}/credits`)
  const { data : similarData } = useFetch(`/${params?.explore}/${params?.id}/similar`)
  const { data : recommendationData } = useFetch(`/${params?.explore}/${params?.id}/recommendations`)
  const [playVideo,setPlayVideo] = useState(false)
  const [playVideoId,setPlayVideoId] = useState("")

  if (!data || !castData || !similarData || !recommendationData) {
    return <div>Carregando...</div>;
  }

  const handlePlayVideo = (data)=>{
    setPlayVideoId(data)
    setPlayVideo(true)
  }

  const duration = (data?.runtime/60)?.toFixed(1)?.split(".")
  const writer = castData?.crew?.filter(el => el?.job === "Writer")?.map(el => el?.name)?.join(", ")

// Função para formatar valores monetários
const formatCurrency = (value) => {
  if (isNaN(value)) {
    return 'N/A';
  }
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'USD' }).format(value);
}

  // Mapeamento de status para tradução
  const statusTranslation = {
    "Released": "Lançado",
    "Post Production": "Pós-produção",
    "In Production": "Em produção",
    "Planned": "Planejado",
    "Canceled": "Cancelado",
    "Ended": "Finalizado",
    "Returning Series": "Série retoranando",
  }

  return (
    <div>
      <div className='w-full h-[280px] relative hidden lg:block'>
        <div className='w-full h-full'>
          <img
            src={imageURL+data?.backdrop_path}
            alt={data.title || data.name || "Imagem de fundo"}
            className='h-full w-full object-cover'
          /> 
        </div> 
        <div className='absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent'></div>    
      </div>

      <div className='container mx-auto px-3 py-16 lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-10 '>
        <div className='relative mx-auto lg:-mt-28 lg:mx-0 w-fit min-w-60'>
          <img
            src={imageURL+data?.poster_path}
            alt={data.title || data.name || "Imagem do pôster"}
            className='h-80 w-60 object-cover rounded'
          /> 
          <button onClick={()=>handlePlayVideo(data)} className='mt-3 w-full py-2 px-4 text-center bg-white text-black rounded font-bold text-lg hover:bg-gradient-to-l from-red-500 to-orange-500 hover:scale-105 transition-all'>Assista Agora</button>
        </div>

        <div>
          <h2 className='text-2xl lg:text-4xl font-bold text-white '>{data?.title || data?.name}</h2>
          <p className='text-neutral-400'>{data?.tagline}</p> 

          <Divider/>

          <div className='flex items-center gap-3'>
            <p>
              Avaliação :  {Number(data?.vote_average).toFixed(1)}+
            </p>
            <span>|</span>
            <p>
              Visualizações : { Number(data?.vote_count)}
            </p>
            <span>|</span>
            <p>Duração : {duration[0]}h {duration[1]}m</p>
          </div> 

          <Divider/>

          <div>
            <h3 className='text-xl font-bold text-white mb-1'>Sinopse</h3>
            <p>{data?.overview}</p>

            <Divider/>
            <div className='flex items-center gap-3 my-3 text-center'>
              <p>
                Status : {statusTranslation[data?.status] || data?.status}
              </p>
              <span>|</span>
              <p>
                Lançado : {moment(data?.release_date).format("DD [de] MMMM [de] YYYY")}
              </p>
              <span>|</span>
              <p>
                Receita : {formatCurrency(data?.revenue)}
              </p>
            </div>

            <Divider/>
          </div>

          <div>
            <p><span className='text-white'>Diretor</span> : {castData?.crew[0]?.name}</p>

            <Divider/>

            <p>
              <span className='text-white'>Escritor : {writer}</span>
            </p>
          </div>

          <Divider/>

          <h2 className='font-bold text-lg'>Elenco :</h2>
          <div className='grid grid-cols-[repeat(auto-fit,96px)] gap-5 my-4'>
            {
              castData?.cast?.filter(el => el?.profile_path).map((starCast) => {
                return (
                  <div key={starCast?.id}>
                    <div>
                      <img
                        src={imageURL+starCast?.profile_path} 
                        alt={starCast.name || "Imagem do elenco"}
                        className='w-24 h-24 object-cover rounded-full'
                      />
                    </div>
                    <p className='font-bold text-center text-sm text-neutral-400'>{starCast?.name}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

      <div>
        <HorizontalScollCard data={similarData} heading={"Similares "+params?.explore} media_type={params?.explore}/>
        <HorizontalScollCard data={recommendationData} heading={"Recomendações "+params?.explore} media_type={params?.explore}/>
      </div>

      {
        playVideo && playVideoId && (
          <VideoPlay data={playVideoId} close={() => setPlayVideo(false)} media_type={params?.explore}/>
        )
      }
    </div>
  )
}

export default DetailsPage