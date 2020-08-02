import styled from '@emotion/styled';
// import { rem } from 'polished';

function ImgComp({ images }) {
  const {
    formats: {
      thumbnail: { url: imageUrl },
    },
    name,
  } = images[0];

  return <img src={imageUrl} alt={name} />;
}

function Card({ title, description, price, images }) {
  return (
    <CardStyled>
      <h4>{title}</h4>
      <p dangerouslySetInnerHTML={{ __html: description }} />
      <p>${price}</p>
      {images.length > 0 && <ImgComp images={images} />}
    </CardStyled>
  );
}

const CardStyled = styled.div`
  background: #00adef;
`;

export default Card;
