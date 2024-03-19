import {
  VisitedCountriesContainer,
  VisitedHeading,
  VisitedListContainer,
  VisitedItem,
  VisitedImage,
  VisitedNameAndRemoveContainer,
  VisitedName,
  VisitedRemove,
  NoVisitedContainer,
  NoVisitedHeading,
} from './styledComponents'

const VisitedCountries = props => {
  const {countriesList, clickRemove} = props
  const filteredList = countriesList.filter(
    eachItem => eachItem.isVisited === true,
  )
  return (
    <VisitedCountriesContainer>
      <VisitedHeading>Visited Countries</VisitedHeading>
      {filteredList.length ? (
        <VisitedListContainer>
          {filteredList.map(eachItem => {
            const onClickRemove = () => {
              clickRemove(eachItem.id)
            }
            return (
              <VisitedItem key={eachItem.id}>
                <VisitedImage src={eachItem.imageUrl} alt="thumbnail" />
                <VisitedNameAndRemoveContainer>
                  <VisitedName>{eachItem.name}</VisitedName>
                  <VisitedRemove type="button" onClick={onClickRemove}>
                    Remove
                  </VisitedRemove>
                </VisitedNameAndRemoveContainer>
              </VisitedItem>
            )
          })}
        </VisitedListContainer>
      ) : (
        <NoVisitedContainer>
          <NoVisitedHeading>No Countries Visited Yet</NoVisitedHeading>
        </NoVisitedContainer>
      )}
    </VisitedCountriesContainer>
  )
}

export default VisitedCountries
