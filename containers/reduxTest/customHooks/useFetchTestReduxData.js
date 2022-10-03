import {useEffect, useMemo, useState} from "react";
import {REQUEST_DATA} from "../redux/constants";
import {useDispatch} from "react-redux";

export const useFetchTestReduxData = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    }, [number]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: REQUEST_DATA});
    }, []);

    const onNumberChange = (e) => {
        setNumber(parseInt(e.target.value))
    }

    const onThemeChange = () => {
        setDark(prevState => !prevState);
    }

    return {number, dark, doubleNumber, onNumberChange, onThemeChange}
}

const slowFunction = (num) => {
    for (let i = 0; i < 1000000000; i++) {}
    return num*2
}