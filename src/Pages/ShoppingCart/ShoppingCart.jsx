import styled from "styled-components";
import ShoppingCard from "../../Components/ShoppingCard";
import { useCart } from "../../Contexts/CartContext";
import { colorPrimario } from "../../Components/UI/Variables";
import { Btn } from "../../Components/UI";

const Div = styled.div`
    margin-bottom: 20%;
`;

const Titulo = styled.h1`
    color: ${colorPrimario};
    text-align: center;
    font-size: 30px;
    font-weight: 400;
    border-color: ${colorPrimario};
    border-bottom: 3px solid;
    padding-bottom: 10px;
    margin: 10px 20px;

    @media (min-width:900px)
    {
        text-align: start;
        font-size: 40px;
    }
`;

const ProductsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 2%;
    margin-top: 20px;

    @media (min-width: 931px) {
        padding: 0 25%;
    }
`;

const ComprarDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const ComprarBtn = styled(Btn)`
    background-color: ${colorPrimario};
    transition: all .5s ease-in-out;

    &:hover{
        background-color: #7aad28;
    }
`;

function ShoppingCart() {
    const { cartItems } = useCart();

    return (
        <Div>
            <Titulo>Información del carrito: </Titulo>
            <ProductsDiv>
                {cartItems.map((cartItem, index) => (
                    <ShoppingCard key={index} cartItem={cartItem} />
                ))}
            </ProductsDiv>
            <ComprarDiv>
                <ComprarBtn>Pagar</ComprarBtn>
            </ComprarDiv>
        </Div>
    );
}

export default ShoppingCart;
