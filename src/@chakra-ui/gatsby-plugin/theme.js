import { theme as defaultTheme, extendTheme } from "@chakra-ui/react"

const theme = extendTheme({

    styles: {
        'wp-block-image .gatsby-image-wrapper, .gatsby-image-wrapper':{
            maxW:'100%',
            width:'auto !important'
        },
        'wp-block-image':{
            img:{
                my:'1rem',
                maxW:'100%',
                height:'auto'
            },
            '.aligncenter':{
                mx:'auto',
                figcaption:{
                    textAlign: 'center'
                }
            },
            figcaption:{
                fontSize: '0.75rem',
                mt:'1em'
            }
        },
        figure:{
            maxW:'100%',
        }, 
        iframe:{
            m:'1rem 0'
        },
        table:{
            fontSize:'18px',
            p:0,
            my:'2rem',
            td:{
                p:'15px',
                borderBottom:'1px solid #ccc',
                '.chakra-ui-dark &':{
                    borderBottom:'1px solid #20222c'
                }
            },
            'tr:nth-child(even)':{
                bg:'#ccc',
                '.chakra-ui-dark &':{
                    bg:"#1A365D"
                }
            }
        },

        'chakra-ui-dark .content':{
            'p a, ul a':{
                color:'#0cf'
            }
            
        },
        '.table-of-contents h1, h2, h3, h5, h5, h6, .sidebar-content h1, h2, h3, h4, h5, h6':{
            wordBreak: 'break-word'
        }
          
       
    },
    colors: {
      
        brandPurple: "#673FB4",
        background: `#0A1D39`,
        brandLink: `#2b6cb0`,
        modes: {
            dark: {
              
                text: '#fff',
                background: '#000',
                primary: '#0cf',
                brandLink: `#0cf`,
                brandPurple: "#cccccc"
            }
        },
        brandOrange: '#f7901f',
    },
    lineHeights: {
        body: 1.5,
        heading: 1.125,
    },
    wp: {
        h1: {
            mt: "3rem",
            mb: ".25rem",
            lineHeight: 1.2,
            fontWeight: "bold",
            fontSize: "1.875rem",
            letterSpacing: "-.025em",
            color: "red",
            wordBreak: "break-all"
        },
        h2: {
            mt: "4rem",
            mb: "1rem",
            lineHeight: 1,
            fontWeight: "semibold",
            fontSize: "1.5rem",
            letterSpacing: "-.025em",
            wordBreak: "break-word",
            "& + h3": {
                mt: "1.5rem",
            },
        },
        h3: {
            mt: "3rem",
            mb: "1rem",
            lineHeight: 1.25,
            fontWeight: "semibold",
            fontSize: "1.25rem",
            letterSpacing: "-.025em",
            wordBreak: "break-word",
        },
        h4: {
            mt: "3rem",
            lineHeight: 1.375,
            fontWeight: "semibold",
            fontSize: "1.125rem",
            wordBreak: "break-word",
        },
        a: {
            color: "brandLink",
            fontWeight: "semibold",
            transition: "color 0.15s",
            transitionTimingFunction: "ease-out",
            _hover: {
                color: "teal.600",
            },
        },
        p: {
            mt: "1.5rem",
            "blockquote &": {
                mt: 0,
            },
        },
        hr: {
            my: "4rem",
        },
        blockquote: {
            bg: "orange.100",
            borderWidth: "1px",
            borderColor: "orange.200",
            rounded: "lg",
            px: "1.25rem",
            py: "1rem",
            my: "1.5rem",
        },
        ul: {
            mt: "1.5rem",
            ml: "1.25rem",
            "blockquote &": { mt: 0 },
            "& > * + *": {
                mt: "0.75rem",
            },
        },
        code: {
            color: "purple.500",
            rounded: "sm",
            px: "1",
            fontSize: "0.875em",
            py: "2px",
            whiteSpace: "nowrap",
            lineHeight: "normal",
            bg: "gray.50",
            "blockquote &": {
                bg: "transparent",
            },
        },
    },
})

export default theme
