export const CoverLink = ({ link }: { link: string }): JSX.Element => {
  return (
    <a
      style={{
        textDecoration: 'none',
        position: 'absolute',
        height: '100%',
        width: '100%',
        zIndex: 3,
      }}
      className="cover-link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    ></a>
  );
};
