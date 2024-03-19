import {
  CountriesContainer,
  Heading,
  CountriesListContainer,
  CountriesItem,
  CountriesTitle,
  CountriesButton,
  CountriesPara,
} from './styledComponents'

const Countries = props => {
  const {countriesList, clickVisit} = props

  return (
    <CountriesContainer>
      <Heading>Countries</Heading>
      <CountriesListContainer>
        {countriesList.map(eachItem => {
          const onClickVisit = () => {
            clickVisit(eachItem.id)
          }

          return (
            <CountriesItem key={eachItem.id}>
              <CountriesTitle>{eachItem.name}</CountriesTitle>
              {eachItem.isVisited ? (
                <CountriesPara isVisited={eachItem.isVisited}>
                  Visited
                </CountriesPara>
              ) : (
                <CountriesButton
                  type="button"
                  isVisited={eachItem.isVisited}
                  onClick={onClickVisit}
                >
                  Visit
                </CountriesButton>
              )}
            </CountriesItem>
          )
        })}
      </CountriesListContainer>
    </CountriesContainer>
  )
}

export default Countries
