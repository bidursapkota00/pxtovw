import React from "react";
import styles from "./styles/style.module.css";
import {useFetchTestReduxData} from "./customHooks/useFetchTestReduxData";
import {useSelector} from "react-redux";
import Image from "next/image";
import image from "../../assets/images/testImage.png";
import {Button, Input} from "antd";

export const ReduxTestContainer = () => {
    //custom hook to fetch test data
    const {number, dark, doubleNumber, onNumberChange, onThemeChange} = useFetchTestReduxData();

    const testData = useSelector(state => state.testReducer);
   const imageData = testData.testData || {};
   const {data = []} = imageData;

   const themeStyles = {
       backgroundColor: dark ? 'black' : 'white',
       color: dark ? 'white' : 'black',
   }

    return <div className={styles.reduxTestContainer}>
        This is the image gallery
        <div style={{
            marginBottom: 20
        }}>
            <Input type="number" value={number} onChange={onNumberChange}/>
            <Button onClick={onThemeChange}>Change Theme</Button>
            <div style={themeStyles}>{doubleNumber}</div>
        </div>
        <div className={styles.imageContainer}>
            {data.map(item => (
                <Image src={item.profile_image_link}
                       width={400}
                       height={400}
                       layout="responsive"
                       priority={false}
                       alt="test image"/>
            ))}

        </div>
        <Image src={image} width={400} height={400} alt="test image"/>
    </div>
}