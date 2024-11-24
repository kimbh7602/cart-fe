export const BOTTOM_MODAL_TYPE = {
  DEFAULT: 'DEFAULT',
  SHARE: 'SHARE',
  RE_CART: 'RE_CART',
  DELETE: 'DELETE',
}

export const DEFAULT_BOTTOM_MODAL = [
  {
    src: '/share.svg',
    alt: 'share',
    text: '공유하기',
    onClick: () => console.log('공유하기'),
  },
]
