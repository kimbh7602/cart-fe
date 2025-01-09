import WriteContainer from '@/components/cart/write/WriteContainer'

interface PageProps {
  params: {
    id: string
  }
}

const Write = ({ params }: PageProps) => {
  return <WriteContainer id={params?.id} />
}

export default Write
