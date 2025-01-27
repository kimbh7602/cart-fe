import EditContainer from '@/components/cart/edit/EditContainer'

interface PageProps {
  params: {
    id: string
  }
}

const CartEdit = ({ params }: PageProps) => {
  return <EditContainer id={params?.id} />
}

export default CartEdit
