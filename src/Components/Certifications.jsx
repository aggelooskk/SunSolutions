import certifications from "../Images/random/certifications.png";

function Certifications() {
  return (
    <>
      <section className="flex justify-center items-center my-10 px-4">
        <img
          src={certifications}
          alt="certifications"
          className="w-full max-w-6xl rounded-lg shadow-md"
        />
      </section>
    </>
  );
}

export default Certifications;
