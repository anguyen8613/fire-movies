import { gql, GraphQLClient } from 'graphql-request'
import { useState } from 'react';
import Link from 'next/link';

export const getServerSideProps = async (pageContext) => {
    const url = process.env.ENDPOINT
    const graphQLClient = new GraphQLClient(url, {
        headers: {
            "Authorization" : `Bearer ${process.env.GRAPH_CMS_TOKEN}`
        }
    })
    const pageSlug = pageContext.query.slug

    const query = gql`
    query($pageSlug: String!) {
      video(where: {
        slug: $pageSlug
      }) {
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
        image{
            url
        },
        mp4 {
          url
        }
      }
    }
    `

    const variables = {
        pageSlug,
    }

    const data = await graphQLClient.request(query, variables)
    const video = data.video

    return {
        props: {
            video
        }
    }
}

const changeToSeen = async (slug) => {
    await fetch('/api/changeToSeen', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ slug })
    })
}

const Video = ({ video }) => {
    const [watching, setWatching] = useState(false)

    return (
        <>
            <div className="account-info">
                <Link href="/"><a>Home</a></Link>
            </div>
            {!watching && <img className="video-image" src={video.image.url} alt={video.title}/>}
            {!watching && <div className="info">
                <p className="text">{video.tags.join(', ')}</p>
                <p className="text">{video.description}</p>
                <button
                    className="video-overlay"
                    onClick={() => {
                        changeToSeen(video.slug)
                        watching ? setWatching(false): setWatching(true)
                    }}
                >PLAY</button>
            </div>}
            {watching && (
                <video width="100%" controls autoPlay>
                    <source src={video.mp4.url} type="video/mp4"/>
                </video>
            )}
            <div className="info-footer"
                 onClick={() => watching ? setWatching(false) : null}
            ></div>
        </>
    )
}

export default Video
