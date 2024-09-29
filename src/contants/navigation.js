import { MdHomeFilled } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";

export const navigation = [
    {
        label : "Filmes",
        href : 'movie',
        icon : <BiSolidMoviePlay/>
    },
    {
        label : "Séries",
        href : "tv",
        icon : <PiTelevisionFill/>
    }
]

export const mobileNavigation = [
    {
        label : "Início",
        href : "/",
        icon : <MdHomeFilled/>
    },
    ...navigation,
    {
        label : "Pesquisar",
        href : "/search",
        icon : <IoSearchOutline/>
    }
]