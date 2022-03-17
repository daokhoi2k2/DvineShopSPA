import React from "react";

interface Props {
  name: string;
  alt?: string;
  width?: string;
  className?: string;
  height?: string;
}

const SVG: React.FC<Props> = (props) => {
  const { name = "", ...rest } = props;

  return (
    <img
      src={require(`../../assets/svg/${name}.svg`)}
      alt={`${name} icon`}
      {...(rest as any)}
    />
  );
};

export default SVG;
