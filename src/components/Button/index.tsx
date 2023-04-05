import { Styled } from "@/typings/types";
import { Button, Box } from "@material-ui/core";
import { useContext} from "react";
import { SearchContext } from "@/context/SearchContext";
import router from "next/router";

const styled: Styled = {
  containerButton: {
    display: "flex",
    justifyContent: "center"
  },

  button: {
    marginTop: "10px",
    padding: "7px 30px",
    fontWeight: "700",
    backgroundColor: "#5d00c0",
    color: "#FFFFFF",
    textTransform: "capitalize",

  },
  buttonDisabled: {
    opacity: "0.5",
    backgroundColor: "#CCCCCC",
    color: "#555555"

  },
}

export function ButtonSearch() {

  function handleClick() {
    router.push('/search-result');
  }
  const {
    selectedYear,
  } = useContext(SearchContext)

  return (
    <Box style={styled.containerButton}>


      {selectedYear ? (
            <Button
            type="submit"
            variant="contained"
            style={styled.button}
            disabled={!selectedYear}
            onClick={handleClick}
          >
            Consultar preço
          </Button>
      ): 
      <Button
      type="submit"
      variant="contained"
      style={styled.buttonDisabled}
      disabled={!selectedYear}
      >
      Consultar preço
      </Button>
        
        }
    
    </Box>
  )
}