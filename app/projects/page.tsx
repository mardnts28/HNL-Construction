import React from "react";
import { client } from "@/sanity/lib/client";
import { projectsQuery, SanityProject } from "@/sanity/lib/queries";
import ProjectsClient from "./ProjectsClient";

// Revalidate cache every 60 seconds (Incremental Static Regeneration)
export const revalidate = 60;

export default async function ProjectsPage() {
  let projects: SanityProject[] = [];
  
  try {
    projects = await client.fetch(projectsQuery);
  } catch (error) {
    console.error("Failed to fetch projects from Sanity:", error);
  }

  return <ProjectsClient initialProjects={projects} />;
}
