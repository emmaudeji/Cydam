import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "@/component/Layout/Head";
import PageHeroBanner from "@/component/Heading/PageHeroBanner";
import { projects } from "@/Data/projects";
import Image from "next/image";
import Link from "next/link";
import Newsletter from "@/component/Sections/Newsletter";
import Projects from "@/component/Sections/Projects";
import CTAprojects from "@/component/Sections/CTAprojects";
import ReactMarkdown from "react-markdown";

const Project = ({ data }) => {
  const [page, setPage] = useState(data);
  const router = useRouter();
  const { projectId } = router.query;

  useEffect(() => {
    setPage(data);
  }, [data]);

  const { id, img, ogImg, partners, clients, details, heading, projectType } = page;
  const tags = [
    { title: "Project Type", type: projectType },
    { title: "Clients", type: clients },
    { title: "Partners", type: partners },
  ];

  const handleNavigation = (direction) => {
    const currentIndex = projects.findIndex((item) => item.id === id);
    let newIndex;

    if (direction === "previous") {
      newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    }

    router.push(`/projects/${projects[newIndex].title}`);
  };

  return (
    <>
      <Head title="Cydam - Project" ogImg={ogImg} />
      <PageHeroBanner
        heading="Cutting-Edge Technology"
        img="/housing/estate2.jpg"
        page={`Home > Projects > Project`}
      />

      <div key={id} className="pt-20">
        <section className="section-padding2 py-24 bg-blue-50 w-full">
          <h2 className="text-3xl font-bold pb-8">{heading}</h2>
          <div className="flex flex-col sm:flex-row w-full gap-4">
            {tags.map(({ type, title }) => (
              <div
                key={title}
                className="py-8 w-full text-center border border-black rounded-lg"
              >
                <h4 className="text-xl font-bold">{title}</h4>
                <p>{type}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="">
          <div className="w-full h-[500px] sm:h-[600px] overflow-hidden">
            <Image
              width={400}
              height={500}
              src={img}
              alt="project"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        <section className="section-padding2 py-24 w-full grid gap-6">
          <ReactMarkdown>{details?.join("\n\n")}</ReactMarkdown>
        </section>

        <section className="section-padding2 py-14 w-full flex justify-between">
          <button
            onClick={() => handleNavigation("previous")}
            className="rounded-full py-4 px-6 text-bold hover-scale-blue border border-blue-700"
          >
            Previous
          </button>
          <button
            onClick={() => handleNavigation("next")}
            className="rounded-full py-4 px-10 text-bold hover-scale-blue border border-blue-700"
          >
            Next
          </button>
        </section>

        <CTAprojects
          btnTxt="Get quote"
          heading="We help you reduce project cost with our innovative approach to construction and project design"
          link="/quote"
        />
      </div>

      <section className="">
        {/* <h3 className="text-3xl font-bold pb-6">
          Related Projects
        </h3> */}
        <Projects />
      </section>
      <Newsletter />
    </>
  );
};

export default Project;

export const getServerSideProps = async ({ params }) => {
  const { slug } = params;

  try {
    // Fetch project data by id
    
    const data = projects.find((item) => item.title === slug);

    if (!data) {
      return {
        notFound: true,
      };
    }

    return { props: { data } };
  } catch (error) {
    console.error(error);
    return { props: { course: null } };
  }
};
