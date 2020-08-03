export default function Picture({ images }) {
  const {
    formats: {
      small: { url: imageUrl },
    },
    name,
  } = images[0];

  return <img src={imageUrl} alt={name} />;
}
