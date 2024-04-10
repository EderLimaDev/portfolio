import { styled } from "@mui/material"


export const StyledButton = () => {

    const StyledButton = styled("button")(({theme}) => ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        color: theme.palette.primary.contrastText,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
        }


    }))

    return (
    <>  
        <StyledButton>
            
        </StyledButton>
    </>
    
)

}

export default StyledButton;