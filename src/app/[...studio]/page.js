"use client"
import { Studio } from "sanity"
import studioConfig from "../../../sanity.config"

export default function Page() {
    return <Studio 
        config={studioConfig}
    />
}
