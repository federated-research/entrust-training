import Image from "next/image";
import LogoDark from "@/assets/i/entrust-logo-long-dark.png";
import LogoLight from "@/assets/i/entrust-logo-long-light.png";

export default function Logo() {
  return (
    <div>
      <Image
        className="block dark:hidden"
        src={LogoLight}
        width={251}
        height={65}
        alt="EOSC ENTRUST Logo"
      />
      <Image
        className="hidden dark:block"
        src={LogoDark}
        width={251}
        height={65}
        alt="EOSC ENTRUST Logo"
      />
    </div>
  );
}
