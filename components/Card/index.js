import styled from '@emotion/styled';
import Picture from './Picture';
import MaterialsList from './Materials';

function Card({ title, description, price, images, materials }) {
  return (
    <CardStyled>
      <div className="poster">{images.length > 0 && <Picture images={images} />}</div>
      <div className="body">
        {materials.length > 0 && <MaterialsList materials={materials} />}
        <h4>{title}</h4>
        <p className="price">${price}</p>
        <p className="description" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  width: 400px;
  margin-top: 50px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  .body {
    padding: 20px;
    h4 {
      margin-bottom: 20px;
      font-size: 18px;
    }
    .description {
      line-height: 1.5;
    }
    .price {
      font-size: 24px;
    }
  }
`;

export default Card;
