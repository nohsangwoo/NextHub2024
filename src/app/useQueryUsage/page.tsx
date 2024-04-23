
'use client'

import { dogByName } from "@/graphql/apis"
import { useQuery } from "@tanstack/react-query"

export default function UseQueryUsage() {
    const name = 'Abby'
    const { data, isLoading } = useQuery({
        queryKey: ['dogByName', name],
        queryFn: () => dogByName({ name: name }),
        // enabled: enableQuery,
    })

    console.log("data: ", data)
    console.log("isLoading: ", isLoading)

    return (
        <div>
            <h1>useQuery Usage</h1>
            <p>useQuery is a hook that is used to fetch data from the server. It is a part of the Apollo Client library</p>
        </div>
    )
}