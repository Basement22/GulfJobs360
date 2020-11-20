import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

import { assets } from '../../theme'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'transparent'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    borderRadius: '8px',
    marginBottom: '20px',
    paddingBottom: '20px',
    backgroundColor: 'white',
    boxShadow: '2px 2px 30px #DFDFDF',
    color: theme.palette.text.secondary,
  },
  title: {
    [theme.breakpoints.down('xs')]: {
      display: "none",
    },
    marginTop: '20px',
    fontSize: '18px',
    color: '#252834',
  },
  text: {
    [theme.breakpoints.down('xs')]: {
      display: "none",
    },
    marginTop: '20px',
    fontSize: '16px',
    fontWeight: '400',
    color: '#4E4E4E',
  },
  tags: {
    [theme.breakpoints.down('xs')]: {
      display: "none",
    },
    marginTop: '20px',
    fontSize: '14px',
    // backgroundColor: 'grey',
    fontWeight: '400',
    color: '#4E4E4E',
  },
  close: {
    marginTop: '20px',
    marginLeft: '20p',
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <div className={classes.paper}  >
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 0px 20px 0px' }} >
              <div>
                <Typography component="h1" className={classes.title} variant="h1">
                  Lorem Ipsum
              </Typography>
                <Typography component="h1" className={classes.text} style={{ marginTop: '10px' }} variant="h1">
                  Lorem Ispum
              </Typography>
                <div style={{ width: '200px', display: 'flex', justifyContent: 'space-between' }} >
                  <BusinessCenterOutlinedIcon style={{ fontSize: '20px', marginTop: '10px' }} />
                  <Typography component="h1" className={classes.text} style={{ marginRight: '20px', marginTop: '10px' }} variant="h1">
                    0-1 Years
                </Typography>
                  <LocationOnOutlinedIcon style={{ fontSize: '20px', marginTop: '10px' }} />
                  <Typography component="h1" className={classes.text} style={{ marginTop: '10px' }} variant="h1">
                    Egypt
                </Typography>
                </div>
              </div>
              <img src={assets.visme} style={{ width: '160px', height: '80px', marginRight: '15px', cursor: 'pointer' }} alt="sorry!" />
            </div>
            <Typography component="h1" className={classes.text} style={{ marginTop: '10px' }} variant="h1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestiae perferendis assumenda laboriosam velit maxime magni ipsum ut delectus voluptatem et quidem eligendi nulla, animi quisquam iure eos similique illo!
            </Typography>
            <Button color="secondary" style={{ marginLeft: '-5px', marginTop: '10px' }} disableRipple='true' >See More</Button>
          </div>
        </Grid>
        <Grid item xs={12}>
        <div className={classes.paper}  >
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 0px 20px 0px' }} >
              <div>
                <Typography component="h1" className={classes.title} variant="h1">
                  Lorem Ipsum
              </Typography>
                <Typography component="h1" className={classes.text} style={{ marginTop: '10px' }} variant="h1">
                  Lorem Ispum
              </Typography>
                <div style={{ width: '200px', display: 'flex', justifyContent: 'space-between' }} >
                  <BusinessCenterOutlinedIcon style={{ fontSize: '20px', marginTop: '10px' }} />
                  <Typography component="h1" className={classes.text} style={{ marginRight: '20px', marginTop: '10px' }} variant="h1">
                    0-1 Years
                </Typography>
                  <LocationOnOutlinedIcon style={{ fontSize: '20px', marginTop: '10px' }} />
                  <Typography component="h1" className={classes.text} style={{ marginTop: '10px' }} variant="h1">
                    Egypt
                </Typography>
                </div>
              </div>
              <img src={assets.visme} style={{ width: '160px', height: '80px', marginRight: '15px', cursor: 'pointer' }} alt="sorry!" />
            </div>
            <Typography component="h1" className={classes.text} style={{ marginTop: '10px' }} variant="h1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestiae perferendis assumenda laboriosam velit maxime magni ipsum ut delectus voluptatem et quidem eligendi nulla, animi quisquam iure eos similique illo!
            </Typography>
            <Button color="secondary" style={{ marginLeft: '-5px', marginTop: '10px' }} disableRipple='true' >See More</Button>
          </div>
        </Grid>
        <Grid item xs={12}>
        <div className={classes.paper}  >
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 0px 20px 0px' }} >
              <div>
                <Typography component="h1" className={classes.title} variant="h1">
                  Lorem Ipsum
              </Typography>
                <Typography component="h1" className={classes.text} style={{ marginTop: '10px' }} variant="h1">
                  Lorem Ispum
              </Typography>
                <div style={{ width: '200px', display: 'flex', justifyContent: 'space-between' }} >
                  <BusinessCenterOutlinedIcon style={{ fontSize: '20px', marginTop: '10px' }} />
                  <Typography component="h1" className={classes.text} style={{ marginRight: '20px', marginTop: '10px' }} variant="h1">
                    0-1 Years
                </Typography>
                  <LocationOnOutlinedIcon style={{ fontSize: '20px', marginTop: '10px' }} />
                  <Typography component="h1" className={classes.text} style={{ marginTop: '10px' }} variant="h1">
                    Egypt
                </Typography>
                </div>
              </div>
              <img src={assets.visme} style={{ width: '160px', height: '80px', marginRight: '15px', cursor: 'pointer' }} alt="sorry!" />
            </div>
            <Typography component="h1" className={classes.text} style={{ marginTop: '10px' }} variant="h1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestiae perferendis assumenda laboriosam velit maxime magni ipsum ut delectus voluptatem et quidem eligendi nulla, animi quisquam iure eos similique illo!
            </Typography>
            <Button color="secondary" style={{ marginLeft: '-5px', marginTop: '10px' }} disableRipple='true' >See More</Button>
          </div>
        </Grid>
        <Grid item xs={12}>
        <div className={classes.paper}  >
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 0px 20px 0px' }} >
              <div>
                <Typography component="h1" className={classes.title} variant="h1">
                  Lorem Ipsum
              </Typography>
                <Typography component="h1" className={classes.text} style={{ marginTop: '10px' }} variant="h1">
                  Lorem Ispum
              </Typography>
                <div style={{ width: '200px', display: 'flex', justifyContent: 'space-between' }} >
                  <BusinessCenterOutlinedIcon style={{ fontSize: '20px', marginTop: '10px' }} />
                  <Typography component="h1" className={classes.text} style={{ marginRight: '20px', marginTop: '10px' }} variant="h1">
                    0-1 Years
                </Typography>
                  <LocationOnOutlinedIcon style={{ fontSize: '20px', marginTop: '10px' }} />
                  <Typography component="h1" className={classes.text} style={{ marginTop: '10px' }} variant="h1">
                    Egypt
                </Typography>
                </div>
              </div>
              <img src={assets.visme} style={{ width: '160px', height: '80px', marginRight: '15px', cursor: 'pointer' }} alt="sorry!" />
            </div>
            <Typography component="h1" className={classes.text} style={{ marginTop: '10px' }} variant="h1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestiae perferendis assumenda laboriosam velit maxime magni ipsum ut delectus voluptatem et quidem eligendi nulla, animi quisquam iure eos similique illo!
            </Typography>
            <Button color="secondary" style={{ marginLeft: '-5px', marginTop: '10px' }} disableRipple='true' >See More</Button>
          </div>
        </Grid>
        <Grid item xs={12}>
        <div className={classes.paper}  >
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 0px 20px 0px' }} >
              <div>
                <Typography component="h1" className={classes.title} variant="h1">
                  Lorem Ipsum
              </Typography>
                <Typography component="h1" className={classes.text} style={{ marginTop: '10px' }} variant="h1">
                  Lorem Ispum
              </Typography>
                <div style={{ width: '200px', display: 'flex', justifyContent: 'space-between' }} >
                  <BusinessCenterOutlinedIcon style={{ fontSize: '20px', marginTop: '10px' }} />
                  <Typography component="h1" className={classes.text} style={{ marginRight: '20px', marginTop: '10px' }} variant="h1">
                    0-1 Years
                </Typography>
                  <LocationOnOutlinedIcon style={{ fontSize: '20px', marginTop: '10px' }} />
                  <Typography component="h1" className={classes.text} style={{ marginTop: '10px' }} variant="h1">
                    Egypt
                </Typography>
                </div>
              </div>
              <img src={assets.visme} style={{ width: '160px', height: '80px', marginRight: '15px', cursor: 'pointer' }} alt="sorry!" />
            </div>
            <Typography component="h1" className={classes.text} style={{ marginTop: '10px' }} variant="h1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestiae perferendis assumenda laboriosam velit maxime magni ipsum ut delectus voluptatem et quidem eligendi nulla, animi quisquam iure eos similique illo!
            </Typography>
            <Button color="secondary" style={{ marginLeft: '-5px', marginTop: '10px' }} disableRipple='true' >See More</Button>
          </div>
        </Grid>
        <Grid item xs={12}>
        <div className={classes.paper}  >
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 0px 20px 0px' }} >
              <div>
                <Typography component="h1" className={classes.title} variant="h1">
                  Lorem Ipsum
              </Typography>
                <Typography component="h1" className={classes.text} style={{ marginTop: '10px' }} variant="h1">
                  Lorem Ispum
              </Typography>
                <div style={{ width: '200px', display: 'flex', justifyContent: 'space-between' }} >
                  <BusinessCenterOutlinedIcon style={{ fontSize: '20px', marginTop: '10px' }} />
                  <Typography component="h1" className={classes.text} style={{ marginRight: '20px', marginTop: '10px' }} variant="h1">
                    0-1 Years
                </Typography>
                  <LocationOnOutlinedIcon style={{ fontSize: '20px', marginTop: '10px' }} />
                  <Typography component="h1" className={classes.text} style={{ marginTop: '10px' }} variant="h1">
                    Egypt
                </Typography>
                </div>
              </div>
              <img src={assets.visme} style={{ width: '160px', height: '80px', marginRight: '15px', cursor: 'pointer' }} alt="sorry!" />
            </div>
            <Typography component="h1" className={classes.text} style={{ marginTop: '10px' }} variant="h1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestiae perferendis assumenda laboriosam velit maxime magni ipsum ut delectus voluptatem et quidem eligendi nulla, animi quisquam iure eos similique illo!
            </Typography>
            <Button color="secondary" style={{ marginLeft: '-5px', marginTop: '10px' }} disableRipple='true' >See More</Button>
          </div>
        </Grid>
        <Grid item xs={12}>
        <div className={classes.paper}  >
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 0px 20px 0px' }} >
              <div>
                <Typography component="h1" className={classes.title} variant="h1">
                  Lorem Ipsum
              </Typography>
                <Typography component="h1" className={classes.text} style={{ marginTop: '10px' }} variant="h1">
                  Lorem Ispum
              </Typography>
                <div style={{ width: '200px', display: 'flex', justifyContent: 'space-between' }} >
                  <BusinessCenterOutlinedIcon style={{ fontSize: '20px', marginTop: '10px' }} />
                  <Typography component="h1" className={classes.text} style={{ marginRight: '20px', marginTop: '10px' }} variant="h1">
                    0-1 Years
                </Typography>
                  <LocationOnOutlinedIcon style={{ fontSize: '20px', marginTop: '10px' }} />
                  <Typography component="h1" className={classes.text} style={{ marginTop: '10px' }} variant="h1">
                    Egypt
                </Typography>
                </div>
              </div>
              <img src={assets.visme} style={{ width: '160px', height: '80px', marginRight: '15px', cursor: 'pointer' }} alt="sorry!" />
            </div>
            <Typography component="h1" className={classes.text} style={{ marginTop: '10px' }} variant="h1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestiae perferendis assumenda laboriosam velit maxime magni ipsum ut delectus voluptatem et quidem eligendi nulla, animi quisquam iure eos similique illo!
            </Typography>
            <Button color="secondary" style={{ marginLeft: '-5px', marginTop: '10px' }} disableRipple='true' >See More</Button>
          </div>
        </Grid>
        <Grid item xs={12}>
        <div className={classes.paper}  >
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 0px 20px 0px' }} >
              <div>
                <Typography component="h1" className={classes.title} variant="h1">
                  Lorem Ipsum
              </Typography>
                <Typography component="h1" className={classes.text} style={{ marginTop: '10px' }} variant="h1">
                  Lorem Ispum
              </Typography>
                <div style={{ width: '200px', display: 'flex', justifyContent: 'space-between' }} >
                  <BusinessCenterOutlinedIcon style={{ fontSize: '20px', marginTop: '10px' }} />
                  <Typography component="h1" className={classes.text} style={{ marginRight: '20px', marginTop: '10px' }} variant="h1">
                    0-1 Years
                </Typography>
                  <LocationOnOutlinedIcon style={{ fontSize: '20px', marginTop: '10px' }} />
                  <Typography component="h1" className={classes.text} style={{ marginTop: '10px' }} variant="h1">
                    Egypt
                </Typography>
                </div>
              </div>
              <img src={assets.visme} style={{ width: '160px', height: '80px', marginRight: '15px', cursor: 'pointer' }} alt="sorry!" />
            </div>
            <Typography component="h1" className={classes.text} style={{ marginTop: '10px' }} variant="h1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestiae perferendis assumenda laboriosam velit maxime magni ipsum ut delectus voluptatem et quidem eligendi nulla, animi quisquam iure eos similique illo!
            </Typography>
            <Button color="secondary" style={{ marginLeft: '-5px', marginTop: '10px' }} disableRipple='true' >See More</Button>
          </div>
        </Grid>
        <Grid item xs={12}>
        <div className={classes.paper}  >
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 0px 20px 0px' }} >
              <div>
                <Typography component="h1" className={classes.title} variant="h1">
                  Lorem Ipsum
              </Typography>
                <Typography component="h1" className={classes.text} style={{ marginTop: '10px' }} variant="h1">
                  Lorem Ispum
              </Typography>
                <div style={{ width: '200px', display: 'flex', justifyContent: 'space-between' }} >
                  <BusinessCenterOutlinedIcon style={{ fontSize: '20px', marginTop: '10px' }} />
                  <Typography component="h1" className={classes.text} style={{ marginRight: '20px', marginTop: '10px' }} variant="h1">
                    0-1 Years
                </Typography>
                  <LocationOnOutlinedIcon style={{ fontSize: '20px', marginTop: '10px' }} />
                  <Typography component="h1" className={classes.text} style={{ marginTop: '10px' }} variant="h1">
                    Egypt
                </Typography>
                </div>
              </div>
              <img src={assets.visme} style={{ width: '160px', height: '80px', marginRight: '15px', cursor: 'pointer' }} alt="sorry!" />
            </div>
            <Typography component="h1" className={classes.text} style={{ marginTop: '10px' }} variant="h1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestiae perferendis assumenda laboriosam velit maxime magni ipsum ut delectus voluptatem et quidem eligendi nulla, animi quisquam iure eos similique illo!
            </Typography>
            <Button color="secondary" style={{ marginLeft: '-5px', marginTop: '10px' }} disableRipple='true' >See More</Button>
          </div>
        </Grid>
        <Grid item xs={12}>
        <div className={classes.paper}  >
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 0px 20px 0px' }} >
              <div>
                <Typography component="h1" className={classes.title} variant="h1">
                  Lorem Ipsum
              </Typography>
                <Typography component="h1" className={classes.text} style={{ marginTop: '10px' }} variant="h1">
                  Lorem Ispum
              </Typography>
                <div style={{ width: '200px', display: 'flex', justifyContent: 'space-between' }} >
                  <BusinessCenterOutlinedIcon style={{ fontSize: '20px', marginTop: '10px' }} />
                  <Typography component="h1" className={classes.text} style={{ marginRight: '20px', marginTop: '10px' }} variant="h1">
                    0-1 Years
                </Typography>
                  <LocationOnOutlinedIcon style={{ fontSize: '20px', marginTop: '10px' }} />
                  <Typography component="h1" className={classes.text} style={{ marginTop: '10px' }} variant="h1">
                    Egypt
                </Typography>
                </div>
              </div>
              <img src={assets.visme} style={{ width: '160px', height: '80px', marginRight: '15px', cursor: 'pointer' }} alt="sorry!" />
            </div>
            <Typography component="h1" className={classes.text} style={{ marginTop: '10px' }} variant="h1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestiae perferendis assumenda laboriosam velit maxime magni ipsum ut delectus voluptatem et quidem eligendi nulla, animi quisquam iure eos similique illo!
            </Typography>
            <Button color="secondary" style={{ marginLeft: '-5px', marginTop: '10px' }} disableRipple='true' >See More</Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
