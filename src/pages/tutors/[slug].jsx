import { useRouter } from "next/router";
import NavbarMolecule from "../../components/molecules/NavbarMolecule";
import { FooterMolecule } from "@/components/molecules/FooterMolecule";
import TeacherProfile from "@/components/atoms/navbar/TeacherprofileAtom";

export default function Tutors() {
  const router = useRouter();
  return (
    <>
      <NavbarMolecule />
      <main style={{ marginTop: "78px" }} className="w-full"></main>
      <TeacherProfile
        teachername={router.query.slug}
        teachernamedescription="This is the description about the teacher"
        subject="Chemistry"
        rating="5 out of 5"
      />

      <FooterMolecule />
    </>
  );
}
