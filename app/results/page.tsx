"use client";
import { Results } from "@/components/index";
import { useSelected } from "@/store/store";
import Link from "next/link";

const Page = () => {
  const selected = useSelected((state) => state.selected);

  return (
    <>
      {selected ? (
        <Results />
      ) : (
        <Link href="/" className="bg-white py-2 px-4 rounded-lg text-darkText">
          New Game
        </Link>
      )}
    </>
  );
};

export default Page;
