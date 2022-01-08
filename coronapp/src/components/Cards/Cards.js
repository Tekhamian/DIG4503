import React from 'react'; 
//counter for the props 
import CountUp from'react-countup';
// CSS & visual aids 
import {Card, CardContent, Typography, Grid,} from '@material-ui/core';
// (cx) is an External module for applying multiple classes to an object
import cx from 'classnames';
import Styles from './Cards.module.css';

const Cards = ({data: {deaths, confirmed, recovered, lastUpdate}}) => {
  if (!confirmed) {
      return 'LOADING...';
  }
    
    return (
        <div className={Styles.containerForCards}>
            <Grid container spacing={3} justify='center'>

                <Grid item component={Card} xs={12} md={3} className={cx(Styles.card, Styles.deaths)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>DEATHS</Typography>
                        <Typography variant='h5'>
                            {/* countup counts the number in real time/ confirmed.value=prop/ duration=counter-time/ seperator=numberseparator eg.1,000 */}
                            <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                        </Typography>
                        {/* the [new Date(prop) concatenated with toDateString()] gives us a readible date format */}
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>COVID-19 Related Deaths</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(Styles.card, Styles.infected)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>INFECTED</Typography>
                        <Typography variant='h5'>
                            {/* countup counts the number in real time/ confirmed.value=prop/ duration=counter-time/ seperator=numberseparator eg.1,000 */}
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                        </Typography>
                        {/* the [new Date(prop) concatenated with toDateString()] gives us a readible date format */}
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>COVID-19 Active Cases</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(Styles.card, Styles.recovered)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>RECOVERED</Typography>
                        <Typography variant='h5'>
                            {/* countup counts the number in real time/ confirmed.value=prop/ duration=counter-time/ seperator=numberseparator eg.1,000 */}
                            <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                        </Typography>
                        {/* the [new Date(prop) concatenated with toDateString()] gives us a readible date format */}
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>COVID-19 Recovered Cases</Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    );
}
export default Cards;