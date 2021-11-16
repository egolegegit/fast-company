import React from "react";
import PropTypes from "prop-types";
import Quality from "./quality";
import { useQualities } from "../../../hooks/useQualities";
import _ from "lodash";

const QualitiesList = ({ qualities }) => {
    const { qualitiesList } = useQualities();

    const qualitiesListFiltered = _.filter(qualitiesList, function (p) {
        return _.includes(qualities, p._id);
    });

    return (
        <>
            {qualitiesListFiltered.map((qual) => (
                <Quality key={qual._id} {...qual} />
            ))}
        </>
    );
};

QualitiesList.propTypes = {
    qualities: PropTypes.array
};

export default QualitiesList;
