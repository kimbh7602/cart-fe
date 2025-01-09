import CartContainer from '@/components/cart/CartContainer'

interface PageProps {
  params: {
    id: string
  }
}

const Cart = ({ params }: PageProps) => {
  return <CartContainer id={params?.id} />
}

export default Cart
