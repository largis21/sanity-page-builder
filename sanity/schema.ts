const languageConfig = ["en", "no"]

type Route = {
    routeName: string
    routeHandle: string
    languageSlugs: {
        language: string
        slug: string
    }[]
}

export const routes: Route[] = [{
    routeName: "news",
    routeHandle: "news",
    languageSlugs: [
        { language: "en", slug: "news" },
        { language: "no", slug: "nyheter" }
    ]
}]

