import React from 'react';

const StudentCardComponent = ({course}) => {
    // const size = "5";
    // const display = ["PAGE", "VIDEOTIME", "URL"];

    // console.log(course)

    // const todayMinus = (days) => {
    //     const today = new Date();
    //     return new Date(today.getFullYear(), today.getMonth(), today.getDate() - days);
    // }
    //
    // const handleTopics = (topic) => {
    //     if (display.includes(topic.type)) {
    //         let color = "grey"
    //         if (topic.date) {
    //             const topicDate = new Date(topic.date)
    //             if (topicDate > todayMinus(3) ){
    //                 color = "red"
    //             } else if(topicDate > todayMinus(7) ){
    //                 color = "yellow"
    //             } else {
    //                 color = "green"
    //             }
    //         }
    //         return (<FaCircle key={topic.order} color={color} size={size}/>)
    //     }
    // }

    return (
        <>
            <p key={course.id}>
                <a href={`https://platform.codingnomads.co/learn/course/view.php?id=${course.id}`}
                   target="_blank">{course.name}</a>
            </p>
        </>
    )
}

export default StudentCardComponent