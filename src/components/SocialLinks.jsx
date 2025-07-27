import { motion } from "framer-motion"
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook, FaVimeo } from "react-icons/fa"

const SocialLinks = () => {
  const socialLinks = [
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaVimeo, href: "#", label: "Vimeo" },
  ]

  return (
    <motion.div
      className="flex justify-center space-x-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          className="text-gray-400 hover:text-orange-500 text-xl transition-colors"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <social.icon />
        </motion.a>
      ))}
    </motion.div>
  )
}

export default SocialLinks
