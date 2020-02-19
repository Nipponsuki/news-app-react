import React from "react";
import { connect } from "react-redux";

import { ResourcesResultsContainer } from "./styles";

import resourcesActions from "_redux/resources/actions";

import ResourceCard from "components/ResourceCard";
import LoadingScreen from "components/LoadingScreen";

const { loadResourcesResults } = resourcesActions;

const Resources = ({ loadResourcesResults, resources, isLoading, error }) => {
  console.log(resources);
  React.useEffect(() => {
    loadResourcesResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ResourcesResultsContainer>
      {isLoading && !error && <LoadingScreen />}
      {error && <h2>{error}</h2>}
      {resources &&
        resources.map(resource => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
    </ResourcesResultsContainer>
  );
};

export default connect(
  state => ({
    resources: state.resources.resources,
    isLoading: state.resources.isLoading,
    error: state.resources.error
  }),
  {
    loadResourcesResults
  }
)(Resources);
