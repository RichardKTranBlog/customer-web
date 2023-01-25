import en from "@/lang/en";
import vi from "@/lang/vi";
import { useRouter } from "next/router";

const useTrans = () => {
  const { locale } = useRouter();
  const trans = locale === "vi" ? vi : en;
  return trans;
};

export default useTrans;
