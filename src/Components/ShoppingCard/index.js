import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";
import { colorPrimario, colorSecundario } from "../UI/Variables";

const Card = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 150px;
    margin-bottom: 24px;
    position: relative;
    display: flex;
    flex-direction: row;
`;

const ImageDiv = styled.div`
    height: 100%;
    width: 33%;
    background-color: #f0f0f0;
    border-radius: 10px 0px 0px 10px;

    @media (min-width: 931px) {
        width: 12%;
    }
`;

const ProductImage = styled.img`
    height: -webkit-fill-available;
    width: -webkit-fill-available;
    border-radius: 5px;
    position: relative;
`;

const Info = styled.div`
    background-color: #ffffff;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
    border-radius: 0px 10px 10px 0px;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 67%;

    @media (min-width: 931px) {
        width: 88%;
    }
`;

const Title = styled.h4`
    color: ${colorPrimario};
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;
    margin-bottom: 8px;
`;

const Price = styled.h5`
    font-size: 18px;
    line-height: 22px;
    color: ${colorSecundario};
    padding: 0 24px;
    font-weight: bold;
    margin: 0;
`;

const QuantityDiv = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 20px;
`;

const QuantityMessage = styled.label`
    background-color: ${colorPrimario};
    border-radius: 7px;
    color: #f9f9f9;
    padding: 10px;
    cursor: pointer;
    width: 90px;
    border: none;
    font-weight: bold;
`;

const QuantityInput = styled.input`
    background-color: ${colorSecundario};
    border-radius: 7px;
    color: #f9f9f9;
    padding: 10px;
    cursor: pointer;
    width: 90px;
    border: none;
    font-weight: bold;
`;

const DeleteButton = styled(AiFillCloseCircle)`
    position: absolute;
    right: 2px;
    top: 2px;
    font-size: 32px;
    cursor: pointer;
    color: #19222d;
`;

const ShoppingCard = ({ cartItem }) => {
    const { product, quantity } = cartItem;
    const { photo, title, price, stock } = product;

    const handleDelete = () => {
        // Lógica para eliminar del carrito
    };

    const handleQuantityChange = (newQuantity) => {
        // Lógica para cambiar la cantidad
    };

    return (
        <Card>
            <DeleteButton onClick={handleDelete} />
            <ImageDiv>
                <ProductImage src={photo} alt={title} />
            </ImageDiv>
            <Info>
                <Title>{title}</Title>
                <Price>{price}</Price>
                <QuantityDiv>
                    <QuantityMessage>Cantidad:</QuantityMessage>
                    <QuantityInput
                        type="number"
                        value={quantity}
                        min={1}
                        max={stock}
                        onChange={(e) => handleQuantityChange(e.target.value)}
                    />
                </QuantityDiv>
            </Info>
        </Card>
    );
};

export default ShoppingCard;
