'use client'

import Image from 'next/image'
import * as S from './styled'
import { useEffect, useMemo, useState } from 'react'
import { useAtom } from 'jotai'
import { bottomModalAtom } from '@/store'
import { ITemplate } from '@/types'
import { useRouter } from 'next/navigation'
import _ from 'lodash'
import { getIconSrc } from '@/utils'

import { MotionConfig, useAnimate, useDragControls, useMotionValue, useTransform } from 'motion/react'

import {
  containerVariants,
  deleteButtonVariants,
  deleteLabelVariants,
  swipeableContainerVariant,
} from '@/constants/animationVariants'

import useMeasure from 'react-use-measure'

interface ICart {
  template: ITemplate
}

const bgColor = {
  normal: '#2b2b2b',
  lighter: '#3a3a3a',
  highlight: '#525252',
}

const Cart = ({ template }: ICart) => {
  const router = useRouter()

  const progressValue = useMemo(() => {
    return _.round((template?.percent || 0) * 3.6) || 0
  }, [template?.percent])

  const goToCart = () => {
    router.push(`/cart/${template?.id}`)
  }

  const [bgColorAnimateRef, animateBgColor] = useAnimate()
  const [swipeAnimateRef, animateSwipe] = useAnimate()

  const swipeDragControls = useDragControls()

  const [buttonsRef, { width: buttonsWidth }] = useMeasure()

  const itemX = useMotionValue(0)
  const backgroundColor = useTransform(
    itemX,
    [-buttonsWidth, 0, buttonsWidth],
    [bgColor.lighter, bgColor.normal, bgColor.lighter],
  )

  const [isDeleteShow, setIsDeleteShow] = useState(false)
  const deleteAnimateState = isDeleteShow ? 'appear' : 'disappear'

  useEffect(() => {
    if (buttonsWidth > 0) {
      itemX.on('change', (v) => {
        const isOverThreshold = v < -buttonsWidth / 2

        setIsDeleteShow(isOverThreshold)
      })
    }
  }, [itemX, buttonsWidth])

  const handleDragEnd = () => {
    const isOverThreshold = itemX.get() < -buttonsWidth / 2

    if (isOverThreshold) {
      animateSwipeToLeft()
    } else {
      animateSwipeToOrigin()
    }
  }

  const animateSwipeToLeft = () => animateSwipe(swipeAnimateRef.current, { x: -buttonsWidth })

  const animateSwipeToOrigin = () => animateSwipe(swipeAnimateRef.current, { x: 0 })

  const animateBgColorToHighlight = (wouldDelay: boolean = false) =>
    animateBgColor(bgColorAnimateRef.current, { backgroundColor: bgColor.highlight }, { delay: wouldDelay ? 0.2 : 0 })

  const animateBgColorToNormal = () => animateBgColor(bgColorAnimateRef.current, { backgroundColor: bgColor.normal })

  return (
    <MotionConfig transition={{ type: 'spring', bounce: 0, duration: 0.3 }}>
      <S.ContentWrapper exit='exit' variants={containerVariants}>
        <S.Buttons initial='disappear' animate={deleteAnimateState} variants={deleteButtonVariants} ref={buttonsRef}>
          <S.IconButton variants={deleteLabelVariants}>
            <Image src='/cart/cart_pin_icon.svg' alt='pin-icon' width={36} height={36} />
          </S.IconButton>
          <S.IconButton variants={deleteLabelVariants}>
            <Image src='/cart/cart_delete_icon.svg' alt='delete-icon' width={36} height={36} />
          </S.IconButton>
        </S.Buttons>

        <S.SwipeableContainer
          // onClick={goToCart}
          style={{ x: itemX }}
          variants={swipeableContainerVariant}
          drag='x'
          dragControls={swipeDragControls}
          // dragListener={false}
          dragConstraints={{ left: -buttonsWidth, right: 0 }}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
          ref={swipeAnimateRef}
          onPointerDown={(e) => swipeDragControls.start(e)} // 전체 컨테이너에 드래그 이벤트 추가
        >
          <S.InnerContainer $isShared={template?.isPublic}>
            <S.ProgressCircle $value={progressValue}>
              <S.InnerCircle>
                <Image src={getIconSrc(template?.thumbnailIndex)} alt='cart-image' width={56} height={56} />
                {template?.percent === 100 && <S.Stamp src='/stamp.svg' alt='stamp' width={56} height={56} />}
              </S.InnerCircle>
            </S.ProgressCircle>
            <S.ContentText>
              <h4>{template?.name}</h4>
              <p>
                {template?.preview?.map((item, idx) => (
                  <span key={idx}>{item} </span>
                ))}
              </p>
            </S.ContentText>
            {template?.isPublic && (
              <S.ShareBadge>
                <p>공유 중</p>
              </S.ShareBadge>
            )}
          </S.InnerContainer>
        </S.SwipeableContainer>
      </S.ContentWrapper>
    </MotionConfig>
  )
}

export default Cart
