import styled from "styled-components";
import Gon1 from "../../assets/Images/Gonzalez1.jpg"
import { colorPrimario, colorSecundario } from "../../Components/UI/Variables";
import { useEffect } from "react";

const SobreDiv = styled.div`
    margin: 10%;

    @media(min-width: 800px) {
        margin-top: 10px;
    }
`

const Titulo = styled.h1`
    color: ${colorPrimario};
    text-align: center;
    font-size: 30px;
    font-weight: 400;
    border-color: ${colorPrimario};
    border-bottom: 3px solid;
    padding-bottom: 10px;
    margin-bottom: 10px;

    @media (min-width:900px)
    {
        text-align: start;
        font-size: 40px;
    }
`

const Parrafos = styled.div`
    font-weight: 400;
    font-size: 25px;
    margin: 0 5px 50px;
    box-sizing: border-box;
    justify-content: center;
    text-align: justify;
`

const FundadorDiv = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

const FotoDiv = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 900px)
    {
        width: 25%;
    }
`

const FotoFundador = styled.img`
    border-radius: 100%;
    width: 100%;
    margin: 15px;


`

const NomFundador = styled.span`
    font-family: "Orbitron";
    font-weight: 600;
    font-size: 30px;
`

const PuestosFundador = styled.span`
    font-family: "Orbitron";
    font-weight: 400;
    font-size: 20px;

`


const About = () => {

    useEffect(() => {
        document.title = "Library | Sobre";
    }, []);

    return(
        <SobreDiv>
            <Titulo>Diseñador</Titulo>
            <FundadorDiv>
                <FotoDiv>
                <FotoFundador src={Gon1} />
                </FotoDiv>
                
                <NomFundador >Héctor González Moráles</NomFundador>
                <PuestosFundador>Contacto: </PuestosFundador>
                <PuestosFundador>Tel: 221 226 3962</PuestosFundador>
                <PuestosFundador>Correo:hector.gonzalez1807@uppuebla.edu.mx </PuestosFundador>
            </FundadorDiv>
        </SobreDiv>
    )
}

export default About;