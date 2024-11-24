'use client'

import { ICategories, ITab } from '@/types'

import * as S from './Tab.styled'
import _ from 'lodash'

interface ITabs {
  tabs: Array<ICategories>
  selectedTab: ICategories | null
  setSelectedTab: (tab: ICategories | null) => void
}

const Tab = ({ tabs, selectedTab, setSelectedTab }: ITabs) => {
  return (
    <S.TabWrapper>
      <S.TabContainer>
        <S.TabGroup>
          <S.Tab $isActive={_.isNull(selectedTab)} onClick={() => setSelectedTab(null)}>
            전체
          </S.Tab>
          {tabs?.map((tab) => (
            <S.Tab key={tab?.id} $isActive={selectedTab?.id === tab?.id} onClick={() => setSelectedTab(tab)}>
              {tab?.name}
            </S.Tab>
          ))}
        </S.TabGroup>
      </S.TabContainer>
      <S.Gradient />
    </S.TabWrapper>
  )
}

export default Tab
