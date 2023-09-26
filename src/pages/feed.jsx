import FeedQuestion from "@/components/atoms/FeedQuestion";
import FooterMolecule from "@/components/molecules/FooterMolecule";
import NavbarMolecule from "@/components/molecules/NavbarMolecule";

const feed = () => {
  return (
    <>
      <NavbarMolecule />

      <div className="mt-20">
        <FeedQuestion
          name="Kaviru"
          uName="ksrx"
          date="2"
          questionTitle="How to patch KDE on FreeBSD"
          questionDescription="Description DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription Description Description Description Description Description "
          tag1="#Python"
          tag2="#JavaScript"
        />
        <FeedQuestion
          name="Kaviru"
          uName="ksrx"
          date="2"
          questionTitle="How to patch KDE on FreeBSD"
          questionDescription="Description DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription Description Description Description Description Description "
          tag1="#Python"
          tag2="#JavaScript"
        />
        <FeedQuestion
          name="Kaviru"
          uName="ksrx"
          date="2"
          questionTitle="How to patch KDE on FreeBSD"
          questionDescription="Description DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription Description Description Description Description Description "
          tag1="#Python"
          tag2="#JavaScript"
        />
      </div>

      <FooterMolecule />
    </>
  );
};

export default feed;
