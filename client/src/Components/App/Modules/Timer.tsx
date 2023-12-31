import React, { useEffect, useState } from 'react';
import { IAction } from '../../../types';
import { isEmpty } from '../../../Utils';

export default function Timer({action} : {action: IAction}) {

    var startDate:number = new Date(action.time).getTime();

    const [load, setLoad] = useState(false);
    const [time, setTime] = useState("");

    useEffect(() => {
        if (load){
            var countDown = setInterval(() => {
                var now:number = new Date().getTime();
                var distance:number = startDate - now;

                if (distance < 0)
                    distance = -distance

                var days:number = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours:number = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes:number = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds:number = Math.floor((distance % (1000 * 60)) / 1000);

                setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

            }, 1000);

            return (() => {
                clearInterval(countDown);
            })
        }

    }, [load, action]);

    useEffect(() => {
        if(!isEmpty(action))
            setLoad(true);
    });

    return (
        <div className="timer">
            <p id="timer" className='timer-text select-none'>{time}</p>
        </div>
    )
}
