import Image from "next/image";
import LogoLight from "@/assets/i/entrust-logo-long-light.png";
import EuFunded from "@/assets/i/eu-funded.jpeg";

export function EntrustLogo() {
  return (
    <Image src={LogoLight} width={251} height={65} alt="EOSC ENTRUST Logo" />
  );
}

export function EuFundedLogo() {
  return (
    <Image
      src={EuFunded}
      width={251}
      height={65}
      alt="Funded by the European Union"
    />
  );
}
