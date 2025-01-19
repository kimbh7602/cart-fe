import SharedContainer from '@/components/shared/SharedContainer'

interface PageProps {
  params: {
    id: string
  }
}

const Shared = ({ params }: PageProps) => {
  return <SharedContainer id={params?.id} />
}

export default Shared
