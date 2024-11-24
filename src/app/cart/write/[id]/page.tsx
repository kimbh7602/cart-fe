import WriteContainer from '@/components/cart/write/WriteContainer'
import { cookies } from 'next/headers'

interface PageProps {
  params: {
    id: string
  }
}

const Write = ({ params }: PageProps) => {
  const accessToken = cookies().get('accessToken')

  return <WriteContainer id={params?.id} accessToken={accessToken?.value} />
}

export default Write
