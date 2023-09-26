import FeedQuestion from "@/components/atoms/FeedQuestion";
import FooterMolecule from "@/components/molecules/FooterMolecule";
import NavbarMolecule from "@/components/molecules/NavbarMolecule";

const feed = () => {
  return (
    <>
      <NavbarMolecule />

      <div className="mt-20 w-full md:w-1/2 justify-center mx-auto flex flex-col gap-11">
        <FeedQuestion
          name="Kaviru"
          uName="ksrx"
          date="2"
          questionTitle="How to patch KDE on FreeBSD" 
          questionDescription="Description DescriptionDescriptionDescriptionDescript ionDescriptionDescriptionDescri ptionDescriptionDescriptionDescription Description Description Description Description Description "
          tag1="#Python"
          tag2="#JavaScript"
        />
        <FeedQuestion
          name="Kaviru"
          uName="ksrx"
          date="2"
          questionTitle="How to patch KDE on FreeBSD"
          questionDescription="Description DescriptionDescriptionDescriptionDescriptionDescript ionDescriptionDescriptionDescrip tionDescriptionDescription Description Description Description Description Description "
          tag1="#Python"
          tag2="#JavaScript"
        />
        <FeedQuestion
          name="Kaviru"
          uName="ksrx"
          date="2"
          questionTitle="How to patch KDE on FreeBSD"
          questionDescription="Description DescriptionDescriptionDescriptionDescriptionDescri ptionDescriptionDescriptionDes criptionDescriptionDescription Description Description Description Description Description "
          tag1="#Python"
          tag2="#JavaScript"
        />
      </div>

      <FooterMolecule />
    </>
  );
};

export default feed;
