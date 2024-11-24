import CartContainer from '@/components/cart/CartContainer'
import { cookies } from 'next/headers'

interface PageProps {
  params: {
    id: string
  }
}

const Cart = ({ params }: PageProps) => {
  const accessToken = cookies().get('accessToken')

  return <CartContainer id={params?.id} accessToken={accessToken?.value} />
}

export default Cart
