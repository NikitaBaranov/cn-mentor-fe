import React, {useEffect, useState} from 'react';
import {getGitHubEvents, getGitHubRepoEvents} from "../services/Github";
import moment from "moment/moment";
import {IconContext} from "react-icons";
import {FaSquare} from "react-icons/fa";

const GigHubActivityComponent = ({gitHubUserId, gitHubRepoId, daysToShow}) => {
    const colors = {
        0: "#161b22",
        1: "#0e4429",
        2: "#006d32",
        3: "#26a641",
        4: "#39d353",
    }

    const [load, setLoad] = useState(true)
    const [events, setEvents] = useState([])
    const [activities, setActivities] = useState([])


    const getEvents = (gitHubUserId, gitHubRepoId) => {
        setLoad(false);
        if (gitHubRepoId) {
            getGitHubRepoEvents(
                gitHubUserId,
                gitHubRepoId,
                (events) => {
                    // console.log(events);
                    setEvents(events);
                },
                (error) => {
                    // console.log(error);
                }
            )
            return
        }

        getGitHubEvents(
            gitHubUserId,
            (events) => {
                // console.log(events);
                setEvents(events);
            },
            (error) => {
                // console.log(error);
            }
        )
    }

    const computeActivities = () => {
        // console.log(events)
        const temp = {};

        if (events) {
            events.forEach(event => {
                const day = moment.utc(event.created_at).startOf('day');
                if (temp[day]) {
                    temp[day] = temp[day] + 1;
                } else {
                    temp[day] = 1;
                }
            })
        }
        setActivities(temp)
    }

    const getStats = () => {
        const now = moment.utc().startOf('day');

        const temp = [];
        for (let i = 0; i < daysToShow; i++) {
            const day = moment.utc(now).clone().subtract(i, 'days');
            if (activities[day]) {
                temp[i] = activities[day]
            } else {
                temp[i] = 0;
            }
        }
        return temp.reverse();
    }

    useEffect(() => {
        if (load) {
            getEvents(gitHubUserId, gitHubRepoId);
        }
    });

    useEffect(() => {
        computeActivities();
    }, [events]);

    return (
        <div>
            {getStats().map((activities, index) => (
                <IconContext.Provider key={index} value={{
                    color: activities < 5 ? colors[activities] : colors[4]
                }}>
                    <FaSquare/>
                </IconContext.Provider>
            ))}
        < /div>
    )

}

export default GigHubActivityComponent