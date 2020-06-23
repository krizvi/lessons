import React, {useEffect, useState} from "react";
import covid19api from '../rest-apis/covid19api';

const Covid19 = () => {
    const [summaryData, setSummaryData] = useState({})

    useEffect(() => {
        covid19api.get('/summary')
            .then(response => {
                setSummaryData(response.data.Global);
            });
    }, [])

    return (
        summaryData ?
            <div class="ui statistics">
                <div class="statistic">
                    <div class="value">
                        {summaryData.NewConfirmed}
                    </div>
                    <div class="label">
                        New Confirmed
                    </div>
                </div>
                <div class="statistic">
                    <div class="value">
                        {summaryData.TotalConfirmed}
                    </div>
                    <div class="label">
                        Total Confirmed
                    </div>
                </div>
                <div class="statistic">
                    <div class="value">
                        {summaryData.NewDeaths}
                    </div>
                    <div class="label">
                        New Deaths
                    </div>
                </div>
                <div class="statistic">
                    <div class="value">
                        {summaryData.TotalDeaths}
                    </div>
                    <div class="label">
                        Total Deaths
                    </div>
                </div>
            </div> : null
    )
}
export default Covid19;
