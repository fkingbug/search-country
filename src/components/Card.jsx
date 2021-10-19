import styled from 'styled-components'

const CardBody = styled.div``

const CardTitle = styled.h3``

const CardListItem = styled.li``
export const Card = ({ img, name, info, onClick }) => {
  return (
    <Wrapper>
      <CardImage />
      <CardBody></CardBody>
    </Wrapper>
  )
}
