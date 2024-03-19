import styled from 'styled-components'

export const CountriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 375px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: #f8fafc;
`

export const CountriesListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  list-style: none;
  overflow-y: auto;
`

export const CountriesItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 5px 20px;
  background-color: #1f1f2f;
  border: 1px solid #334155;
  border-radius: 8px;
`

export const CountriesTitle = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  color: #f1f5f9;
`

export const CountriesButton = styled.button`
  background-color: ${props => (props.isVisited ? 'transparent' : '#3b82f6')};
  border: none;
  border-radius: 5px;
  width: 100px;
  height: 30px;
  cursor: pointer;
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.isVisited ? '#cbd5e1' : '#ffffff')};
`

export const CountriesPara = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  padding-right: 25px;
  color: ${props => (props.isVisited ? '#cbd5e1' : '#ffffff')};
  margin: 0;
`
