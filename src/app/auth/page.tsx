import { NextPage } from "next";
import Image from "next/image";
import ImmobileLogo from "./ImmobileLogo";
import SupabaseAuth from "./SupabaseAuth";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <>
      <div className="flex w-screen h-screen bg-branco dark:bg-escuro2">
        {/* Parte da esqueda - form */}
        <div className="flex w-7/12 h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <ImmobileLogo />
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <SupabaseAuth />
          </div>
        </div>
        {/* Parte da direita - imagem */}
        <div className="hidden lg:block rounded-s-giga overflow-hidden">
          <Image
            src="assets/login/bg1.jpg"
            alt="Casa"
            width={1}
            height={1}
            className="w-full h-screen"
          />
        </div>
      </div>
    </>
  );
};

export default Page;
