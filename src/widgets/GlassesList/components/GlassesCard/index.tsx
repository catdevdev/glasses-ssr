import React from "react";
import Image from "next/image";

interface GlassesCardProps {
  name: string;
  imageUrl: string;
}

const GlassesCard = ({ name, imageUrl }: GlassesCardProps) => {
  console.log(imageUrl);
  return (
    <div>
      {name}
      <Image
        width={100}
        height={100}
        src={imageUrl}
        alt={name}
        priority
      ></Image>
    </div>
  );
};

export default GlassesCard;
