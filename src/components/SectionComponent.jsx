import React, {useEffect, useState} from 'react';
import {FaCircle} from "react-icons/fa";

const SectionComponent = ({section}) => {
    const display = ["PAGE", "VIDEOTIME", "URL"];
    const size = "5";

    const [stats, setStats] = useState(undefined);
    const [collapse, setCollapse] = useState(true);

    useEffect(() => {
        const stats = calculateStats(section.topics)
        setStats(stats)
        // setCollapse(stats["green"] === stats["total"] || stats["grey"] === stats["total"])
        setCollapse(stats["red"] === 0 && stats["yellow"] === 0)
    }, []);

    // console.log(section)

    const todayMinus = (days) => {
        const today = new Date();
        return new Date(today.getFullYear(), today.getMonth(), today.getDate() - days);
    }

    const calculateStats = (topics) => {
        return topics.reduce((result, topic) => {
            if (display.includes(topic.type)) {
                result["total"] = result["total"] + 1;
                if (topic.date) {
                    const topicDate = new Date(topic.date)
                    if (topicDate > todayMinus(3)) {
                        result["red"] = result["red"] + 1;
                    } else if (topicDate > todayMinus(7)) {
                        result["yellow"] = result["yellow"] + 1;
                    } else {
                        result["green"] = result["green"] + 1;
                    }
                } else {
                    result["grey"] = result["grey"] + 1;
                }
            }
            return result;
        }, {
            "total": 0,
            "grey": 0,
            "red": 0,
            "yellow": 0,
            "green": 0
        })
    }

    const handleTopics = (topic) => {
        if (display.includes(topic.type)) {
            let color = "grey"
            if (topic.date) {
                const topicDate = new Date(topic.date)
                if (topicDate > todayMinus(3)) {
                    color = "red"
                } else if (topicDate > todayMinus(7)) {
                    color = "yellow"
                } else {
                    color = "green"
                }
            }
            return (<FaCircle key={topic.order} color={color} size={size}/>)
        }
    }

    const getColor = () => {
        if (stats["red"] > 0) {
            return "red"
        }
        if (stats["yellow"] > 0) {
            return "yellow"
        }
        if (stats["total"] === stats["green"]) {
            return "green"
        }
        if (stats["total"] === stats["grey"]) {
            return "grey"
        }
        return "blue"
    }

    const handleStats = (section) => {
        if (stats === undefined || stats["total"] === 0) {
            return (<></>)
        }

        if (collapse) {
            return (
                <span key={section.order} title={section.name}>
                    <FaCircle key={section.order} color={getColor()} size={size * 2}
                              onClick={() => setCollapse(!collapse)}/>
                </span>
            )
        }

        return (
            <span key={section.order} title={section.name} onClick={() => setCollapse(!collapse)}>
                 | {section.topics.map(topic => handleTopics(topic))} |
            </span>
        )
    }

    return handleStats(section)
}

export default SectionComponent