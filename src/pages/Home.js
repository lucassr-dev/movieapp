import BannerHome from '../components/BannerHome'
import { useSelector } from 'react-redux'
import HorizontalScollCard from '../components/HorizontalScollCard'
import useFetch from '../hooks/useFetch'

const Home = () => {
  const trendingData = useSelector(state => state.movieData.bannerData)
  const { data : nowPlayingData } = useFetch('/movie/now_playing')
  const { data : topRatedData } = useFetch('/movie/top_rated')
  const { data : popularTvShowData } = useFetch('/tv/popular')
  const { data : onTheAirShowData } = useFetch('/tv/on_the_air')
 // Função para determinar o tipo de mídia
  const getMediaType = (item) => {
  return item.media_type || 'movie'; // Assumindo 'movie' como padrão se não houver media_type
};

return (
  <div>
      <BannerHome/>
      <HorizontalScollCard data={trendingData} heading={"Em Alta"} trending={true}
        media_type={trendingData.length > 0 ? getMediaType(trendingData[0]) : 'movie'}/>
        <HorizontalScollCard data={nowPlayingData} heading={"Recentes"} media_type={"movie"}/>
        <HorizontalScollCard data={topRatedData} heading={"Filmes Pupulares"} media_type={"movie"}/>
        <HorizontalScollCard data={popularTvShowData} heading={"Séries Populares"} media_type={"tv"}/>
        <HorizontalScollCard data={onTheAirShowData} heading={"No ar"} media_type={"tv"}/>
    </div>
  )
}

export default Home
