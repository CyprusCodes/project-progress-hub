export const fetchProjects = async () => {
    const API_URL = import.meta.env.VITE_API_BASE_URL;
    const TOKEN = import.meta.env.VITE_PROJECT_PROGRESS_TOKEN;
    const ORG_ID = import.meta.env.VITE_ORGANIZATION_ID;

    if (!API_URL || !TOKEN || !ORG_ID) {
        console.error("Missing API configuration");
        return [];
    }

    try {
        const response = await fetch(`${API_URL}/public/projects?organizationId=${ORG_ID}`, {
            headers: {
                "X-Project-Progress-Token": TOKEN,
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }

        const data = await response.json();
        return data.projects || [];
    } catch (error) {
        console.error("Failed to fetch projects:", error);
        return [];
    }
};

export const fetchProjectBySlug = async (slug: string) => {
    const API_URL = import.meta.env.VITE_API_BASE_URL;
    const TOKEN = import.meta.env.VITE_PROJECT_PROGRESS_TOKEN;
    const ORG_ID = import.meta.env.VITE_ORGANIZATION_ID;

    if (!API_URL || !TOKEN || !ORG_ID) {
        console.error("Missing API configuration");
        return null;
    }

    try {
        const response = await fetch(`${API_URL}/public/projects/${slug}?organizationId=${ORG_ID}`, {
            headers: {
                "X-Project-Progress-Token": TOKEN,
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }

        const data = await response.json();
        return data.project || null;
    } catch (error) {
        console.error("Failed to fetch project:", error);
        return null;
    }
};
