import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import cardImage from "/assets/card.png"

const TeamMemberCard = ({ name, title, imageSrc }) => {
  return (
    <motion.div
      className="flex-shrink-0 w-[90px] h-[130px] bg-gray-900 rounded-[20px] overflow-hidden shadow-lg border border-gray-700 flex flex-col items-center justify-center p-2"
      initial={{ opacity: 0.3, scale: 1 }}
      animate={{ opacity: 0.3}}
      transition={{ duration: 0.3 }}
      whileHover={{ opacity: 1 }}
    >
      <Card className=" bg-gray-700/10 opacity-1">
        <CardHeader floated={false} className="w-[70px]">
          <img
            src={cardImage || "/placeholder.svg"}
            alt={name}
            className="object-cover w-full h-full rounded-sm"
          />
        </CardHeader>
        <CardBody className=" items-start p-2 ml-4" dir="rtl">
          <Typography
            variant="h4"
            className="mb-1 text-orange-900 text-sm font-bold pr-2"
          >
            {name}
          </Typography>
          <Typography
            className="font-medium text-white text-xs pr-2"
            textGradient
          >
            {title}
          </Typography>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default TeamMemberCard;
