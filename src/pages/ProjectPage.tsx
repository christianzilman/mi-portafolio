import { useEffect } from "react";
import { useLoaderData } from "react-router";
import { ProjectDetail } from "../components/ProjectDetail";
import { projectLoader } from "../router/loaders";

export function ProjectPage() {
  const project = useLoaderData<typeof projectLoader>();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [project.slug]);

  return <ProjectDetail project={project} />;
}
