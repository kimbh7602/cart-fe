import HomeContainer from '@/components/home/HomeContainer'
import { cookies } from 'next/headers'

const Home = () => {
  const accessToken = cookies().get('accessToken')

  return <HomeContainer accessToken={accessToken?.value} />
}

export default Home
