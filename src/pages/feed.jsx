import FeedQuestion from "@/components/atoms/FeedQuestion";
import FooterMolecule from "@/components/molecules/FooterMolecule";
import NavbarMolecule from "@/components/molecules/NavbarMolecule";

const feed = () => {
  return (
    <>
      <NavbarMolecule />

      <div className="mt-20">
        <FeedQuestion />
      </div>

      <FooterMolecule />
    </>
  );
};

export default feed;
