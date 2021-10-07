import {gql, GraphQLClient} from 'graphql-request'
import Link from 'next/link'
import Image from 'next/image'
import Section from "../components/Section"
import NavBar from "../components/NavBar"
import disneyLogo from '../public/disney-button.png'
import marvelLogo from '../public/marvel-button.png'
import natgeoLogo from '../public/natgeo-button.png'
import starwarsLogo from '../public/star-wars-button.png'
import pixarLogo from '../public/pixar.png'

export const getStaticProps = async () => {
    const url = process.env.ENDPOINT
    const graphQLClient = new GraphQLClient(url, {
        headers: {
            "Authorization": `Bearer ${process.env.GRAPH_CMS_TOKEN}`
        }
    })

    const videosQuery = gql`
    query {
      videos {
        createdAt,
        id,
        title,
        description,
        seen,
        slug,
        tags,
        thumbnail {
          url
        },
        mp4 {
          url
        }
      }
    }
  `

    const accountQuery = gql`
    query {
    account(where: { id: "ckug6vrw8kbkf0b27bvw0pm5e"}) {
      username
      avatar {
        url
      }
    }
  }
  `

    const data = await graphQLClient.request(videosQuery)
    const videos = data.videos
    const accountData = await graphQLClient.request(accountQuery)
    const account = accountData.account

    return {
        props: {
            videos,
            account
        }
    }
}


const Home = ({videos, account}) => {


    const randomVideo = (videos) => {
        return videos[Math.floor(Math.random() * videos.length)]
    }

    const filterVideos = (videos, genre) => {
        return videos.filter((video) => video.tags.includes(genre))
    }

    const unSeenVideos = (videos) => {
        return videos.filter(video => video.seen == false || video.seen == null)
    }


    return (
        <>
            <NavBar account={account}/>
            <div className="app">
                <div className="main-video">
                    <img src={randomVideo(videos).thumbnail.url}
                         alt={randomVideo(videos).title}/>
                </div>

                <div className="video-feed">
                    <Link href="#disney">
                        <div className="franchise" id="disney1">
                            <Image src={disneyLogo}/>
                        </div>
                    </Link>
                    <Link href="#pixar">
                        <div className="franchise" id="pixar1">
                            <Image src={pixarLogo}/>
                        </div>
                    </Link>
                    <Link href="#star-wars" id="star-wars1">
                        <div className="franchise" >
                            <Image src={starwarsLogo}/>
                        </div>
                    </Link>
                    <Link href="#nat-geo">
                        <div className="franchise" id="nat-geo1">
                            <Image src={natgeoLogo}/>
                        </div>
                    </Link>
                    <Link href="#marvel">
                        <div className="franchise" id="marvel1">
                            <Image src={marvelLogo}/>
                        </div>
                    </Link>
                </div>
                <Section genre={'Recommended for you'} videos={unSeenVideos(videos)}/>
                <Section genre={'Family'} videos={filterVideos(videos, 'family')}/>
                <Section genre={'Thriller'} videos={filterVideos(videos, 'thriller')}/>
                <Section genre={'Classic'} videos={filterVideos(videos, 'classic')} />
                <div id="pixar">
                    <Section  genre={'Pixar'} videos={filterVideos(videos, 'pixar')} />
                </div>
                <div id="marvel">
                    <Section  genre={'Marvel'} videos={filterVideos(videos, 'marvel')} />
                </div>
                <div id="nat-geo">
                    <Section  genre={'National Geographic'}
                        videos={filterVideos(videos, 'national-geographic')} />
                </div>
                <div id="disney">
                    <Section  genre={'Disney'} videos={filterVideos(videos, 'disney')} />
                </div>
                <div id ="star-wars">
                    <Section  genre={'Star Wars'} videos={filterVideos(videos, 'star-wars')} />
                 </div>

            </div>
        </>
    )
}

export default Home










