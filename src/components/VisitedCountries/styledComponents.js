import styled from 'styled-components'

export const VisitedCountriesContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const VisitedHeading = styled.h1`
  font-size: 24px;
  font-family: 'Roboto';
  color: #f8fafc;
`

export const VisitedListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 0px;
  list-style: none;
`

export const VisitedItem = styled.li`
  width: 32%;
  margin-right: 8px;
  background-color: #1f1f2f;
  border-radius: 10px;
`

export const VisitedImage = styled.img`
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

export const VisitedNameAndRemoveContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
`

export const VisitedName = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #f1f5f9;
`

export const VisitedRemove = styled.button`
  font-family: 'Roboto';
  font-size: 14px;
  color: #f1f5f9;
  border: 1px solid #94a3b8;
  background-color: transparent;
  border-radius: 5px;
  padding: 5px 20px;
  cursor: pointer;
`

export const NoVisitedContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 300px;
`

export const NoVisitedHeading = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  color: #cbd5e1;
`
