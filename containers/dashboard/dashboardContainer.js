import React, {useEffect, useState} from "react";
import {put} from "redux-saga/effects";
import styles from "./styles/dashboardContainer.module.css";
import {useRouter} from "next/router";
import landing_en from "./locales/en/landing.json";
import landing_np from "./locales/ne/landing.json";
import {useDispatch, useSelector} from "react-redux";
import {REQUEST_EXAM_DATA} from "../../redux/constants/test";
import {checkIfLoading} from "../../redux/selectors/uiSelectors";
import {Button} from "antd";
import {REQUEST_TAGS_DATA} from "../../redux/constants/tags";

export const DashboardContainer = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const allExamsData = useSelector(state => state.test.allExams);
    const allTags = useSelector(state => state.tags.allTags);
    const isLoading = useSelector(state => checkIfLoading(state, 'REQUEST_EXAM_DATA'));
    const buttonLoading = useSelector(state => checkIfLoading(state, 'REQUEST_TAGS_DATA'))
    console.log("this is the allExamsData", allExamsData, allTags);
    useEffect(() => {
        //dispatch api call with type and payload data
        dispatch({
            type: REQUEST_EXAM_DATA,
            payload: {loading: true}}
        );

    }, []);
    const {locale} = router;
    const t = locale === "en" ? landing_en : landing_np;

    const handleButtonClick = () => {
        dispatch({type: REQUEST_TAGS_DATA})
    }

    if (isLoading) {
        return <div>
            Loading...
        </div>
    }

    return (
        <div className={"flex-center " + styles.dashboardContainer}>
            <p className={styles.dashboardContainerTitle}>{t.heading1}</p>
            <Button type="primary" loading={buttonLoading} onClick={handleButtonClick}>Fetch Tags</Button>
        </div>
    )
}