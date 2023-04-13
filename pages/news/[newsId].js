import { useRouter } from 'next/router'

// our-domain.com/news/[newsId]

const NewsPage = () => {
  const router = useRouter()

  const newsIs = router.query.newsId

  // send a request to the backend API
  // to fetch the news item with newsId
  
  return (
    <h1>The Detail Page</h1>
  )
}

export default NewsPage