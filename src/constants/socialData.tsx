import { GithubIcon } from "./icons";
import { LinkedinIcon } from "./icons";
// import { TwitterIcon } from "./icons";
import { EmailIcon } from "./icons";
const linkedinUrl = "https://www.linkedin.com/in/hosain-dev";
const githubUrl = "https://github.com/hosainahmeed";
const emailUrl = "mailto:hosaindev96@gmail.com";
export const socialData = [
  { icon: <GithubIcon />, label: "GitHub", handle: "@hosainahmed", color: "#fff", url: githubUrl },
  { icon: <LinkedinIcon />, label: "LinkedIn", handle: "hosain-ahmed", color: "#0A66C2", url: linkedinUrl },
//   { icon: <TwitterIcon />, label: "Twitter / X", handle: "@hosain_dev", color: "#1DA1F2" },
  { icon: <EmailIcon />, label: "Email", handle: "hosaindev96@gmail.com", color: "#A291FD", url: emailUrl },
];