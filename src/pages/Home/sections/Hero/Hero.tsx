import { Button, Container, Grid, Typography, styled } from "@mui/material";
import Avatar from "../../../../assets/img/avatar.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';


export const Hero = () => {

    const StyledHero = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",

    }))

    const StyledImg = styled("img")(() => ({
        width: "100%",
        borderRadius: "50%"

    }))


    return (
        <>

            <StyledHero>
                <Container >
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <StyledImg src={Avatar} />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography color="primary.contrasText" variant="h1" textAlign="center">Eder Lima</Typography>
                            <Typography color="primary.contrasText" variant="h2" textAlign="center">I'm a Computer Engineer</Typography>

                            <Grid container display="flex" justifyContent="center">
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <Button>
                                        <DownloadIcon />
                                        Download CV
                                    </Button>
                                </Grid>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <Button>
                                        <EmailIcon />
                                        Contact Me
                                    </Button>
                                </Grid>

                            </Grid>

                        </Grid>
                    </Grid>



                </Container>

            </StyledHero>
        </>

    )
}
