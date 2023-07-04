import React from "react";
import TabList from "./TabList";
import TabPanel from "./TabPanel";
import {useEffect, useRef, useState} from "react";

function Devices() {
    const [activeTab, setActiveTab] = useState('');
    const initedRef = useRef(false);

    useEffect(() => {
        if (!activeTab && !initedRef.current) {
            initedRef.current = true;
            setActiveTab(new URLSearchParams(location.search).get('tab') || 'all');
        }
    }, []);

    return (<section className="section main__devices">
        <div className="section__title">
            <h2 className="section__title-header">
                Избранные устройства
            </h2>
            <TabList activeTab={activeTab} setActiveTab={setActiveTab}/>
        </div>
        <TabPanel activeTab={activeTab}/>

    </section>);
}

export default Devices;