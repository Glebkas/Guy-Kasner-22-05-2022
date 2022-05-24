import { DailyCardBody } from './DailyCardBody';
import { DailyCardImg } from './DailyCardImg';
import { DailyCardSubtitle } from './DailyCardSubtitle';
import { DailyCardTemp } from './DailyCardTemp';
import { DailyCardTitle } from './DailyCardTitle';
import { DailyCardWrapper } from './DailyCardWrapper';

export const DailyCard = ({ day }) => {
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const d = new Date(day.Date);
    let dayName = d.getDay();
    return (
        <DailyCardWrapper>
            <DailyCardBody>
                <DailyCardTitle>{dayNames[dayName]}</DailyCardTitle>
                <DailyCardImg iconNum={day.Day.Icon}></DailyCardImg>
                <DailyCardTemp>
                    {Math.floor(day.Temperature.Minimum.Value)}° -{' '}
                    {Math.floor(day.Temperature.Maximum.Value)}°
                </DailyCardTemp>
                <DailyCardSubtitle>{day.Day.IconPhrase}</DailyCardSubtitle>
            </DailyCardBody>
        </DailyCardWrapper>
    );
};
